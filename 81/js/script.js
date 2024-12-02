'use strict';

const persone = {
    name: 'Alex',
    tel: '+38999999',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

// console.log(JSON.stringify(persone)); // переводимо об'єкт в JSON формат
// console.log(JSON.parse(JSON.stringify(persone))); // навпаки JSON => об'єкт

// За допомогою JSON можна робити глибоке клонування об'єкту
// stringify() перетворює об'єкт в JSON, а parse() розпарсить JSON назад в об'єкт з глибоким клонуванням
const clone = JSON.parse(JSON.stringify(persone));
// Перевіряємо
clone.parents.mom = 'Ann';

console.log(persone);
console.log(clone);
