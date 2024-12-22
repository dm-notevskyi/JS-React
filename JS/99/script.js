'use strict';

// Інкапсуляція - це один з принципів ООП.
// Він означає принцип написання коду, при якому ніхто не може вплинути на роботу нашого коду

// В наступному приклад показано, що хто завгодно може повпливати на роботу нашого об'єкту
function User(name, age) {
    this.name = name;
    this.age = age;

    this.say = function() {
        console.log(`User name: ${this.name}, age: ${this.age}`);
    }
}

const ivan = new User('Ivan', 27);

// ми можемо як переглянути, так і змінювати дані об'єкту:
console.log(ivan.name);
console.log(ivan.age);

ivan.age = 30;
ivan.say();

// Тому нижче приведу приклад як можна замінити конструкцію 'this', щоб не можна було просто так впливати на об'єкт

function User2(name, age) {
    this.name = name;
    let userAge = age; // тепер якщо спробувати переглянути зовні змінну userAge, то вона покаже undefined, так як це локальна змінна

    this.say = function() {
        console.log(`User name: ${this.name}, age: ${userAge}`);
    };

    // щоб встановлювати або діставати 'userAge' треба використовувати функції:
    this.getAge = function() {
        return userAge;
    };

    this.setAge = function(age) {
        if (typeof(age) === 'number' && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log('Некоректне значення!');
        }
    };
}

const alex = new User2('Alex', 28);

console.log(alex.userAge); // undefined
console.log(alex.getAge()); // 28

alex.setAge(32);
alex.setAge(150); // Некоректне значення!
console.log(alex.getAge()); // 32

alex.say();

// =================================================================

// Як це працює на класах

class User3 {
    constructor(name, age) {
        this.name = name;
        // Такий синтаксис змінної не буде працювати в класі, а 'this.userAge' зробить цю змінну публічною
        // let userAge = age;
        // Тому в класах треба використовувати інший синтсксис ('_'):
        this._age = age; // '_' - говорить про приватність цієї змінної, хоча ми можемо її змінити. Це просто негласна угода між програмістами
    }

    #surname = 'Doe'; // '#' - робить цю змінну приватною і ми не зможемо звернутись до неї зовні

    say = () => {
        console.log(`User name: ${this.name} ${this.#surname}, age: ${this._age}`);
    }

    // також треба використовувати звичайні геттери і сеттери:
    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof(age) === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Некоректне значення!');
        }
    }

    get surname() {
        return this.#surname;
    }

    set surname(surname) {
        this.#surname = surname;
    }
}

const john = new User3('John', 29);

console.log(john.age); // getter
john.age = 33; // setter
console.log(john.age);

john.say();

// console.log(john.#surname); // видасть помилку 'Private field...'
console.log(john.surname) // undefined, але після прописаняя геттеру виведе значення 'this.#surname'

john.surname = 'Dark';
console.log(john.surname); // Dark