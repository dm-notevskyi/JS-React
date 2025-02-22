'use strict';

// let k = 0;

// function count() {
//     // Доки буде виконуватись цикл, "alert" не спрацює і ми нічого не зможемо зробити на сторінці
//     // Тому такі задачі краще розбивати на дрібніші, щоб наш Call Stack не забивався
//     for (let i = 0; i < 1e9; i++) {
//         k++;
//     }
//     alert('done');
// }
// count();

// ====================================================================

// Приклад зі співбесіди
// Що виведеться раніше?
setTimeout(() => {
    console.log(1);
}, 0);

console.log(2);

// Спочатку виконається синхронна операція (2), а потім асинхронна (setTimeout)
// Тому що асинхронна операція в любому випадку в процесі виконання
// спочатку потрапить в "Web Apis", записується там, а потім тільки йде "Callback".
// Тому синхронний код в такому випадку виконається швидше.

// Але є ще одна технічна причина. JS в setTimeout замість "0" автоматом підставляє 4 мс.
// Це робиться для сумісності з різними браузерами.