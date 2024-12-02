'use strict';

const inputUah = document.querySelector('#uah'),
      inputUsd = document.querySelector('#usd');

// Старий спосіб роботи з сервером через http request
inputUah.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', './js/current.json'); // встановили параметри запиту (GET запит і url на сервер)
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // встановили параметри того, що ми отримаємо з серверу

    request.send(); // відправили запит

    // Подія 'readystatechange' відслідковує статус готовності нашого запиту в даний момент
    // request.addEventListener('readystatechange', () => {
    //     // 'readyState = 4' - це статус 'DONE' (дані прийшли)
    //     // 'status == 200' - запит успішно завершився
    //     if (request.readyState === 4 && request.status === 200) {
    //         // 'response' - це відповідь з серверу
    //         const data = JSON.parse(request.response);

    //         inputUsd.value = (+inputUah.value / data.current.usd).toFixed(2); // toFixed(n) - округлення до 'n' знаків після коми
    //     } else {
    //         inputUsd.value = 'Щось пішло не так';
    //     }
    // });


    // Також можна використовувати подію 'load' замість 'readystatechange', бо вона новіша
    // Вона виконається тільки якщо 'readyState === 4', тому цей вираз можна прибрати з умови 'if'
    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputUah.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'Щось пішло не так';
        }
    });
});