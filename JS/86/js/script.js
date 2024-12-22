'use strict';

// fetch - це функція, яка робить запит на сервер за допомогою "Promise"
// тому в fetch працюють "then()"
// Це на багато простіше і зручніше ніж працювати з XMLHttpRequest

// Приклад GET запиту на сервіс "JSON Placeholder" - https://jsonplaceholder.typicode.com/
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json()) // fetch має свій метод "json()", який перетворює відповідь від серверу з json в звичайний об'єкт
    .then(json => console.log(json));


// POST запит:
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({name: 'Alex'}),
    headers: {
        'Content-type': 'application/json'
    }
})
    .then(response => response.json())
    .then(json => console.log(json));


// Далі я перероблюю проєкт "Food", замінюючи XMLHttpRequest на fetch