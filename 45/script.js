// console.log(document.body.childNodes);

// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);

// console.log(document.querySelector('#current').parentNode.parentNode);

console.log(document.querySelector('#current').parentElement);

console.log(document.querySelector('[data-current="3"]').previousElementSibling);
console.log(document.querySelector('[data-current="3"]').nextElementSibling);

console.log('========================================');

// Щоб перечислити всі дочерні елементи, а не nodes функції немає,
// тому треба використовувати цикл.
// "forEach" не підходить, тому треба використовувати "for of"

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }

    console.log(node);
}