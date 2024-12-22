'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastFilm = prompt('Один из последних просмотренных фильмов?', '').trim(),
            filmRate = prompt('На сколько оцените его?', '');
        
        if (lastFilm != '' && lastFilm != null && filmRate != '' && filmRate != null && lastFilm.length <= 50) {
            personalMovieDB.movies[lastFilm] = filmRate;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Ви подивились доволі мало фільмів.');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Ви класичний глядач.')
    } else if (personalMovieDB.count >= 30) {
        alert('Ви кіноман!');
    } else {
        alert('Виникла помилка.');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш улюблений жанр під номером ${i}`);
    }
}

writeYourGenres();