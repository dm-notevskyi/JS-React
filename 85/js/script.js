'use strict';

// Приклад невдалої реалізації асинхронного коду, в якому певні дії будуть виконуватись в строгому порядку
// Такі випадки ще називають "Callback Hell"

// console.log('Запит даних...');

// setTimeout(() => {
//     console.log('Підготовка даних...');

//     const product = {
//         name: 'TV',
//         price: 2000
//     };

//     setTimeout(() => {
//         product.status = 'order';
//         console.log(product);
//     }, 2000);
// }, 2000);

// І таких вкладень як вище може бути на багато більше, тому це і називають "Callback Hell"
// На багато зручніше використовувати "Promise".
// Зробимо те саме за допомогою "Promise":

console.log('Запит даних...');

const req = new Promise((resolve, reject) => { // "resolve" - все ок; "reject" - якась помилка
    setTimeout(() => {
        console.log('Підготовка даних...');
    
        const product = {
            name: 'TV',
            price: 2000
        };
        
        // якщо все ок, то викликаємо "resolve()"
        resolve(product); // передаємо в "then()" аргументом об'єкт "product", щоб в "then()" був до нього доступ
    }, 2000);
});

// Якщо все добре, то resolve(), який вище, передається в then(), який нижче.
// Тобто "then()" використовується для опрацювання позитивного результату ("resolve")
req.then(product => { // отримали "product" від "resolve(product)"
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';

            // Передаємо "product" через "resolve()" в наступний "then()",
            // таким чином створюючи ланцюжок асинхронних операцій
            resolve(product);

            // Також якщо щось пішло не так, то ми можемо використати "reject()"
            // і потім опрацювати його нижче за допомогою "catch()"
            // reject();
        }, 2000);
    });
}).then(data => {
    // отримуємо "data" від попереднього "then()", який ретьорнить "resolve(product)"
    data.modify = true;
    
    // За допомогою "return" можемо передати "data" (тобто об'єкт "product") в наступний "then()"
    return data;
}).then(data => {
    console.log(data);
}).catch(() => {
    // Тут ми опрацьовуємо "reject(), який викликали вище"
    console.error('Виникла помилка...');
}).finally(() => {
    // "finally()" завжди використовується в кінці ланцюжку
    // І він виконується за будь-якого результату "промісу"
    console.log('Finally');
});

console.log('==================================================');

// ====================================================================

// Promise.all()

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

test(1000).then(() => { console.log('1000 ms') });
test(2000).then(() => { console.log('2000 ms') });

// Promise.all() служить для того, щоб ми переконались, що всі проміси виконались
// Тобто, він буде чекати, поки всі проміси виконаються
Promise.all([test(1000), test(2000)]).then(() => {
    console.log('All');
});

// Promise.race() - виконує свої дії після того коли виконається перший проміс:
Promise.race([test(1000), test(2000)]).then(() => {
    console.log('Race');
});