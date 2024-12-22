const btns = document.querySelectorAll('button');

const deleteElement = function (event) {
    console.log(event.target);
    console.log(event.type);
}

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});