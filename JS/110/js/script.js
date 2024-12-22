'use strict';

// Функція-генератор позначається "*" після слова "function".
// Такі функції видають нам результат послідовно:
// Тобто коли ми викликаємо ф-ю вперше - вона видає один результат,
// Коли вдруге - вона видає вже інший результат і т.д.
// І за цей функціонал відповідає ключове слово "yield"

// function* generator() {
//     yield 'S';
//     yield 'c';
//     yield 'r';
//     yield 'i';
//     yield 'p';
//     yield 't';
// }

// const str = generator();

// Щоб викликати наступний крок нашого генератору
// необхідно використовувати вже встроєний метод "next":

// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());

// console.log(str.next().value);

// ================================================================

function* count(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

// const counter = count(7);

// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);

for (let k of count(7)) {
    console.log(k);
}