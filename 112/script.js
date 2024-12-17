'use strict';

const btnPhone = document.querySelector('#iphone'),
      btnMacbook = document.querySelector('#macbook'),
      images = document.querySelectorAll('img');

let phoneAnimation,
    macbookAnimation;

btnPhone.addEventListener('click', () => {
    if (!phoneAnimation) {
        phoneAnimation = images[0].animate([
            {
                transform: 'translateY(0) rotate(0)',
                filter: 'opacity(100%)'
            },
            {
                transform: 'translateY(100px) rotate(180deg)',
                filter: 'opacity(50%)'
            },
            {
                transform: 'translateY(-100px) rotate(270deg)',
                filter: 'opacity(75%)'
            },
            {
                transform: 'translateY(0) rotate(360deg)',
                filter: 'opacity(100%)'
            }
        ], {
            duration: 3000,
            iterations: Infinity
        });
    } else if (phoneAnimation.playState === 'paused') {
        phoneAnimation.play();
    } else {
        phoneAnimation.pause();
    }
});

btnMacbook.addEventListener('click', () => {
    if (!macbookAnimation) {
        macbookAnimation = images[1].animate([
            {
                transform: 'scale(1)',
                position: 'relative',
                left: '0'
            },
            {
                transform: 'scale(1.5)',
                position: 'relative',
                left: '200px'
            },
            {
                transform: 'scale(1)',
                position: 'relative',
                left: '0'
            }
        ], {
            duration: 1500,
            iterations: Infinity
        });
    } else if (macbookAnimation.playState === 'paused') {
        macbookAnimation.play();
    } else {
        macbookAnimation.pause();
    }
});

