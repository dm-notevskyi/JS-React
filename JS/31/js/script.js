'use strict';

const options = {
    name: 'test',
    width: '1024',
    height: '1024',
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
}

options.makeTest();

console.log(Object.keys(options).length);

// Деструктуризація об'єкту

const {border, bg} = options.colors;

console.log(border);