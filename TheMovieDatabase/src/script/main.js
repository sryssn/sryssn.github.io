const removeMovieLists = () => $('#movie-list').html('');
const searchKeyup = (e) => {
    if(e.keyCode === 13) {
        searchMovies();
    };
};

const searchMovies = () => {
    $('#movie-list').html('');
    $.ajax({
        url: 'http://www.omdbapi.com/',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey' : '5ac89b3',
            's' : $('#search-input').val()
        },
        success: result => {
            $('#search-input').val('');
            if(result.Response == 'True') {
                let movies = result.Search;
                $.each(movies, function(i, data){
                    $('#movie-list').append(`
                    <div class="col-md-4">
                    <div class="card mb-3">
                    <img src="${data.Poster}" class="card-img-top">
                    <div class="card-body">
                    <h5 class="card-title">${data.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${data.Year}</h6>
                    <a href="#" class="btn btn-dark show-details" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${data.imdbID}">Show Details</a>
                    </div>
                    </div>
                    </div>
                    `);
                });
            } else {
                if(result.Error === 'Incorrect IMDb ID.' || result.Error === 'Too many results.') {
                    alert('Movie title is not correct!');
                } else {
                    alert(result.Error);
                };
            };
        },
    });
};

const showDetails = function() {
    $.ajax({
        url: 'http://www.omdbapi.com/',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey' : '5ac89b3',
            'i' : $(this).data('id')
        },
        success: movie => {

            let stars = '';
            let star = `<i class="bi bi-star-fill text-warning"></i>`;
            const starHalf = `<i class="bi bi-star-half text-warning"></i>`;
            const starEmpty = `<i class="bi bi-star text-warning"></i>`;
            const imdbRating = movie.imdbRating;
            
            if(imdbRating === 10) {
                for (let i = 0; i < 5; i++) {
                    stars += star;
                };
            } if(imdbRating > 8 && imdbRating < 10) {
                for (let i = 0; i < 4; i++) {
                    stars += star;
                };
                stars += starHalf;
            } if(imdbRating === 8) {
                for (let i = 0; i < 4; i++) {
                    stars += star;
                };
                stars += starEmpty;
            } if(imdbRating > 6 && imdbRating < 8) {
                for (let i = 0; i < 3; i++) {
                    stars += star;
                };
                stars += starHalf;
                stars += starEmpty;
            } if(imdbRating === 6) {
                for (let i = 0; i < 3; i++) {
                    stars += star;
                };
                for (let i = 0; i < 2; i++) {
                    stars += starEmpty;
                };
            } if(imdbRating > 4 && imdbRating < 6) {
                for (let i = 0; i < 2; i++) {
                    stars += star;
                };
                stars += starHalf;
                for (let i = 0; i < 2; i++) {
                    stars += starEmpty;
                };
            } if(imdbRating === 4) {
                for (let i = 0; i < 2; i++) {
                    stars += star;
                };
                for (let i = 0; i < 3; i++) {
                    stars += starEmpty;
                };
            } if(imdbRating > 2 && imdbRating < 4) {
                for (let i = 0; i < 1; i++) {
                    stars += star;
                };
                stars += starHalf;
                for (let i = 0; i < 3; i++) {
                    stars += starEmpty;
                };
            } if(imdbRating === 2) {
                stars += star;
                for (let i = 0; i < 4; i++) {
                    stars += starEmpty;
                };
            } if(imdbRating > 0 && imdbRating < 2) {
                stars += starHalf;
                for (let i = 0; i < 4; i++) {
                    stars += starEmpty;
                };
            } if(imdbRating === 0) {
                for (let i = 0; i < 5; i++) {
                    stars += starEmpty;
                };
            };

            if(movie.Response == 'True') {
                $('.modal-content').html(`
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${movie.Title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row">
                                <div class="col-md-4">
                                    <img src="${movie.Poster}" class="img-fluid rounded mx-auto d-block mb-3">
                                </div>
                            <div class="col-md-8">
                                <ul class="list-group">
                                    <li class="list-group-item"><strong>IMDb Rating : ${stars} ${movie.imdbRating}/10</strong></li>
                                    <li class="list-group-item"><strong>Released : </strong>${movie.Released}</li>
                                    <li class="list-group-item"><strong>Genre : </strong>${movie.Genre}</li>
                                    <li class="list-group-item"><strong>Runtime : </strong>${movie.Runtime}</li>
                                    <li class="list-group-item"><strong>Director : </strong>${movie.Director}</li>
                                    <li class="list-group-item"><strong>Actors : </strong>${movie.Actors}</li>
                                    <li class="list-group-item"><strong>Plot : </strong>${movie.Plot}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
                </div>
                `);
            } else {
                alert(movie.Error);
            };
        },
    });
};

$('#nav-link').on('click', removeMovieLists)
$('#nav-brand').on('click', removeMovieLists)
$('#movie-list').on('click', '.show-details', showDetails);
$('#search-input').on('keyup', searchKeyup);
$('#search-button').on('click', searchMovies);