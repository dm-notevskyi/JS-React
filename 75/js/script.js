'use strict';

// 1. Звичайна функція: this = window. Але якщо 'use strict' - undefined

function showThis(a, b) {
    console.log(this);

    function sum() {
        console.log(this);
        return a + b;
    }

    console.log(sum());
}

showThis(4, 5);


// 2. Контекст у методів об'єкта - сам об'єкт

const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this); // тут контекст виклику - це об'єкт

        function about() {
            console.log(this); // а тут контекст знову undefined так як це не метод об'єкту, а функція всередині методу
        }
    }
}

obj.sum();


// 3. this в конструкторах і класах - це новий екземпляр об'єкту (в даному випадку 'ivan')

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    }
}

const ivan = new User('Ivan', 28); // цей новостворений об'єкт і є новим контекстом виклику у функції-конструкторі 'User': this = ivan


// 4. Ручна прив'язка this: call, apply, bind

function sayName(surname) {
    console.log(this);
    console.log(`${this.name} ${surname}`);
}

const user = {
    name: 'John'
}

sayName.call(user, 'Smith'); // call створив контектс виклику
sayName.apply(user, ['Smith']); // apply працює так само, тільки синтаксис 2го параметру трохи інший


function count(num) {
    return this * num;
}

const double = count.bind(2); // передали контекст виклику за допомогою 'bind'. Тепер this = 2

console.log(double(3));
console.log(double(13));

console.log('===================================================');
// ==================================================================

// Практика

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';
});

// Особливість стрілочної функції

const obj2 = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            // звичайна функція втратила б контекст this показав би 'undefined',
            // але стрілочна функція працює інакше: вона не має свого контексту виклику
            // і вона посилається на контекст виклику свого предку 'sayNumber'
            // а 'sayNumber' - це метод об'єкту, тому у нього контекст виклику - сам об'єкт 'obj2'
            console.log(this.num);
        }

        say();
    }
}

obj2.sayNumber();
