'use strict';

// Local Storage

// localStorage.setItem('number', 5);
// localStorage.removeItem('number');
// localStorage.clear();
// console.log(localStorage.getItem('number'));

// ========================================================

// Practice

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.background = 'red';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.background = 'white';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.background = 'red';
    }
});

// ========================================================

const persone = {
    name: 'Alex',
    age: 25
}

// Щоб записати об'єкт в Local Storage, його потрібно перевести в JSON
const serializedPersone = JSON.stringify(persone);

localStorage.setItem('alex', serializedPersone);

console.log(JSON.parse(localStorage.getItem('alex')));