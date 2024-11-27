// let timerId = setTimeout(logger, 2000);

// function logger() {
//     console.log('text');
// }

// clearInterval(timerId); // відміняє setTimeout, якщо, наприклад, юзер вже виконав певну дію, яка має відмінити його

// ==================================================

// const btn = document.querySelector('.btn');
// let timerId2,
//     i = 0;

// btn.addEventListener('click', () => {
//     timerId2 = setInterval(logger2, 500);
// });

// function logger2() {
//     if (i === 3) {
//         clearInterval(timerId2);
//     }
//     console.log('text');
//     i++;
// }

// ==================================================

// let id = setTimeout(function log() {
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500)

// ==================================================

const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if (pos === 300) {
            clearInterval();
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);