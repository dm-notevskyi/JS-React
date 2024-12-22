function calculateVolumeAndArea(val) {
    if (typeof(val) == 'number'&& Number.isInteger(val) && val > 0) {
        let vCube = val * val * val;
        let sCube = val * val * 6;
        
        return `Объем куба: ${vCube}, площадь всей поверхности: ${sCube}`;
    } else {
        return 'При вычислении произошла ошибка';
    }
}

console.log(calculateVolumeAndArea(NaN));

//=========================================================

function getCoupeNumber(num) {
    if (typeof(num) !== 'number' || !Number.isInteger(num) || num < 0) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    } else if (num === 0 || num > 36) {
        return 'Таких мест в вагоне не существует';
    } else {
        return Math.ceil(num / 4);
    }
}

console.log(getCoupeNumber(-10));

//=========================================================

function getTimeFromMinutes(num) {
    if (typeof(num) !== 'number' || !Number.isInteger(num) || num < 0) {
        return 'Ошибка, проверьте данные';
    }

    let hours = Math.floor(num / 60);
    let minutes = num % 60;

    let hoursWord = '';

    switch (hours) {
        case 0:
            hoursWord = 'часов';
            break;
        case 1:
            hoursWord = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursWord = 'часа';
            break;
        default:
            hoursWord = 'часов';
            break;
    }

    return `Это ${hours} ${hoursWord} и ${minutes} минут`;
}

console.log(getTimeFromMinutes(310));

//=========================================================

function findMaxNumber(a, b, c, d) {
    if (arguments.length < 4 || typeof(a) !== 'number' || typeof(b) !== 'number'  || typeof(c) !== 'number'  || typeof(d) !== 'number') {
        return 0;
    }

    let maxNum = 0;

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > maxNum) {
            maxNum = arguments[i];
        }
    }

    return maxNum;
}

console.log(findMaxNumber(1, 5, '6', '10'));

//=========================================================

function fib(num) {
    if (typeof(num) !== 'number' || !Number.isInteger(num) || num < 1) {
        return '';
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}

console.log(fib(4));