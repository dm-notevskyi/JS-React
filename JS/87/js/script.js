'use strict';

// forEach() не повертає нам новий масив, 
// а просто перебирає якись масив, виконуючи певні дії з його елементами


// filter
// Повертає новий відфільтрований масив

const names = ['Alex', 'Ann', 'Ksenia', 'Volodymyr'];

const shortNames = names.filter(name => name.length < 5);

console.log(shortNames);


// map
// Цей метод дозволяє взяти вихідний масив і змінити кожен його елемент
// І на виході в нас буде новий масив вже зі зміненими даними

const answers = ['AlEx', 'AnnA', 'HEllo'];

const result = answers.map(item => item.toLowerCase());

console.log(result);


// every/some
// every - перебирає масив і якщо всі елементи підходять під задану умову - поветрає "true", якщо не всі, то "false"
// some - перебирає масив і якщо хоча б 1 елемент підходить під задану умову, то він поверне "true", а якщо жоден, то "false"

const arr = [4, 'hello', 'world'];

console.log(arr.every(item => typeof(item) === 'number'));
console.log(arr.some(item => typeof(item) === 'number'));


// reduce
// Служить для того, щоб збирати масив в одне ціле

const arr2 = [4, 5, 1, 3, 2, 6];
const res = arr2.reduce((sum, current) => sum + current);
// спочатку sum = 0; current = 4
// далі sum = 4; current = 5
// далі sum = 9; current = 1
// і т.д.
console.log(res);


const arr3 = ['apple', 'pear', 'plum'];
const res2 = arr3.reduce((sum, current) => `${sum}, ${current}`);
console.log(res2);


const arr4 = [4, 5, 1, 3, 2, 6];
// Також ми можемо після callback функції додати ще 1 аргумент (додали "3")
// Це початкове значення, тобто тепер ми починатимемо не з "0", а з "3"
const res3 = arr4.reduce((sum, current) => sum + current, 3);
console.log(res3);

// =======================================================================


const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
}

// entries() - перетворює об'єкт в масив з масивами
const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);