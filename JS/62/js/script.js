const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

btns[0].addEventListener('click', () => {
    btns[1].classList.toggle('red');
});

// Метод forEach не працюватиме з кнопками, які ми динамічно створили за допомогою document.createElement()

// btns.forEach(btn => { 
//     btn.addEventListener('click', () => {
//         console.log('Hello');
//     });
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

// Для того щоб події працювали на динамічно створеномому елементі 
// треба використовувати делегування подій, тобто:
// створюємо подію 'click' на батьківському елементі кнопок (.btn-block)
// і використовуємо у .btn-block властивість 'target'

wrapper.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
        // console.log('Hello');
    }
});

wrapper.addEventListener('click', (event) => {
    if (event.target.matches('button.red')) {
        console.log('Hello');
    }
});