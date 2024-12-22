'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: 'ff',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: ''
    }
]

try {
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);
    
        if (!blockObj.id) throw new SyntaxError(`В даних під номером ${i + 1} немає id`);
    
        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    });
} catch(e) {
    if (e.name === 'SyntaxError') {
        console.log(e.message);
    } else throw e; // в цьому випадку ми викидуємо помилку далі за 'catch', на сайт в консоль
}

// const err = new Error('Test error');
// console.log(err.name, err.message, err.stack);