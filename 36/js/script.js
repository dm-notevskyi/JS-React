'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const lastFilm = prompt('Один из последних просмотренных фильмов?', '').trim(),
                filmRate = prompt('На сколько оцените его?', '');
            
            if (lastFilm != '' && lastFilm != null && filmRate != '' && filmRate != null && lastFilm.length <= 50) {
                personalMovieDB.movies[lastFilm] = filmRate;
            } else {
                i--;
            }
        }
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Ви подивились доволі мало фільмів.');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('Ви класичний глядач.')
        } else if (personalMovieDB.count >= 30) {
            alert('Ви кіноман!');
        } else {
            alert('Виникла помилка.');
        }
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: function() {
        let favouriteGenres = '';

        // for (let i = 1; i <= 3; i++) {
        //     const filmGenre = prompt(`Ваш улюблений жанр під номером ${i}`);

        //     if (filmGenre != '' && filmGenre != null) {
        //         personalMovieDB.genres[i - 1] = filmGenre;
        //     } else {
        //         console.log('Ви ввели не коректні дані або не ввели їх зовсім.');
        //         i--;
        //     }
        // }

        const filmGenres = prompt(`Введіть улюблені жанри через кому`).toLowerCase();

        if (filmGenres != '' && filmGenres != null) {
            personalMovieDB.genres = filmGenres.split(',');
            personalMovieDB.genres.sort();
        } else {
            console.log('Ви ввели не коректні дані або не ввели їх зовсім.');
            i--;
        }

        personalMovieDB.genres.forEach((genre, i) => {
            favouriteGenres += `Любимый жанр #${i + 1} - это ${genre}\n`;
        });

        console.log(favouriteGenres);
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();