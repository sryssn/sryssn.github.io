const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu ul');
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

$.getJSON ('../src/DATA.json', function(data) {
    let restaurants = data.restaurants;
    $.each(restaurants, (i, data) => {
        $('.container').append(`
            <div class="card">
                <div class="city">${data.city}</div>
                <div class="image">
                    <img src="${data.pictureId}" alt="${data.name}">
                </div>
                <article class="content">
                    <p>Rating : <span>${data.rating}/5</span></p>
                    <h3>${data.name}</h3>
                    <p>${data.description}</p>
                </article>
            </div>
        `);
    })
})