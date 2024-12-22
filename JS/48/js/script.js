// Події на моб пристроях:
// touchstart - тап по екрану
// touchmove - коли ведемо пальцем по екрану
// touchend - коли прибираємо тап від екрану
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    
    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        console.log(e.targetTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);
    });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();

    //     console.log('End');
    // });
});

// touches - кількість пальців, які взаємодіють з екраном
// targetTouches - кількість пальців, які взаємодіють з певним об'єктом
// changedTouches - кількість пальців, які беруть учать в поточній події