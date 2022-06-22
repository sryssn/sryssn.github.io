const books = [];
const RENDER_EVENT = 'render-book';
const SAVED_EVENT = 'saved-book';
const STORAGE_KEY = 'BOOK_APPS';

const textCari = document.querySelector('#searchBookTitle');
const tombolCari = document.getElementById('searchSubmit');

document.addEventListener('DOMContentLoaded', function() {
    const submitForm = document.getElementById('inputBook');
    submitForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addBook();
    });

    if (isStorageExist()) {
        loadDataFromStorage();
    }
});

textCari.addEventListener('keyup', pencarian);
tombolCari.addEventListener('click', function(event) {
    event.preventDefault();
    pencarian();
});

function addBook() {
    const bookTitle = document.getElementById('inputBookTitle').value;
    const bookAuthor = document.getElementById('inputBookAuthor').value;
    const bookYear = document.getElementById('inputBookYear').value;
    const checkbox = document.getElementById('inputBookIsComplete').checked;

    const generatedID = generateId();
    const bookObject = generateBookObject(generatedID, bookTitle, bookAuthor, bookYear, checkbox);
    books.push(bookObject);

    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

function generateId() {
    return +new Date();
}

function generateBookObject(id, judul, penulis, tahun, sudahDibaca) {
    return {
    id,
    judul,
    penulis,
    tahun,
    sudahDibaca
    }
}

function makeBook(bookObject) {
    const textJudul = document.createElement('h3');
    const textPenulis = document.createElement('p');
    const textTahun = document.createElement('p');
    const textArticle = document.createElement('article');
    const tombolGreen = document.createElement('button');
    const tombolRed = document.createElement('button');
    const tmblAction = document.createElement('div');
    const container = document.createElement('div');

    textArticle.classList.add('book_item');
    tombolGreen.classList.add('green');
    tombolRed.classList.add('red');
    tmblAction.classList.add('action');
    container.classList.add('item');

    textJudul.innerText = bookObject.judul;
    textPenulis.innerText = 'Penulis: ' + bookObject.penulis;
    textTahun.innerText = 'Tahun: ' + bookObject.tahun;
    tombolRed.innerText = 'Hapus Buku';

    tombolRed.addEventListener('click', function () {
        tombolHapus(bookObject.id);
        });
    
    textArticle.append(textJudul, textPenulis, textTahun, tmblAction);
    tmblAction.append(tombolGreen, tombolRed);
    container.append(textArticle);

    container.setAttribute("id", `book-${bookObject.id}`);

    if (bookObject.sudahDibaca) {
        tombolGreen.innerText = 'Belum selesai di Baca';
        tombolGreen.addEventListener('click', function () {
        tombolKembali(bookObject.id);
        });
    } else {
        tombolGreen.innerText = 'Selesai dibaca';
        tombolGreen.addEventListener('click', function () {
        grupSudahDibaca(bookObject.id);
        });
    }
    return container;
}

function grupSudahDibaca (bookId) {
    const bookTarget = findBook(bookId);

    if (bookTarget == null) return;

    bookTarget.sudahDibaca = true;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

function tombolHapus(bookId) {
    const konfirmasi = confirm('Yakin Hapus?');
    if (konfirmasi) {
        const bookTarget = findBookIndex(bookId);

        if (bookTarget === -1) return;

        books.splice(bookTarget, 1);
        document.dispatchEvent(new Event(RENDER_EVENT));
    }
    saveData();
}

function tombolKembali(bookId) {
    const bookTarget = findBook(bookId);
    if (bookTarget == null) return;

    bookTarget.sudahDibaca = false;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

function findBook(bookId) {
    for (const bookItem of books) {
        if (bookItem.id === bookId) {
        return bookItem;
        }
    }
    return null;
}

function findBookIndex(bookId) {
    for (const index in books) {
    if (books[index].id === bookId) {
        return index;
        }
    }
    return -1;
}

function isStorageExist() {
    if (typeof (Storage) === undefined) {
        alert('Browser tidak mendukung local storage');
        return false
    }
    return true;
}

function saveData() {
    if (isStorageExist()) {
        const parsed = JSON.stringify(books);
        localStorage.setItem(STORAGE_KEY, parsed);
        document.dispatchEvent(new Event(SAVED_EVENT));
    }
}

function loadDataFromStorage() {
    const ambilData = localStorage.getItem(STORAGE_KEY);
    let data = JSON.parse(ambilData);

    if (data !== null) {
        for (const book of data) {
        books.push(book);
        }
    }
    document.dispatchEvent(new Event(RENDER_EVENT));
}

function pencarian() {
    const cariKata = document.querySelector('#searchBookTitle').value.toLowerCase();
    const grupItem = document.querySelectorAll('.book_item');

    grupItem.forEach((item) => {
        const isiItem = item.firstChild.textContent.toLowerCase();

        if(isiItem.indexOf(cariKata) != -1) {
            item.setAttribute('style', 'display: block;');
        } else {
            item.setAttribute('style', 'display: none !important;');
        }
    })
}

document.addEventListener(RENDER_EVENT, function () {
    const uncompletedBookList = document.getElementById('incompleteBookshelfList');
    uncompletedBookList.innerHTML = '';

    const completedBookList = document.getElementById('completeBookshelfList');
    completedBookList.innerHTML = '';

    for (const bookItem of books) {
        const bookElement = makeBook(bookItem);
        if (!bookItem.sudahDibaca) {
        uncompletedBookList.append(bookElement);
        } else {completedBookList.append(bookElement)};
    }
});