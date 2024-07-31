'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
        filmRate = prompt('На сколько оцените его?', '');
    
    if (lastFilm != null && lastFilm != '' && filmRate != null && filmRate != '' && lastFilm.length <= 50) {
        personalMovieDB.movies[lastFilm] = filmRate;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    alert('Ви подивились доволі мало фільмів.');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Ви класичний глядач.')
} else if (personalMovieDB.count >= 30) {
    alert('Ви кіноман!');
} else {
    alert('Виникла помилка.');
}

console.log(personalMovieDB);