const logg = 'Hello World';

console.log(logg.slice(6, 11));
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));

const num = 12.2;

console.log(Math.round(num));

const test = '12.2px';

console.log(parseInt(test));
console.log(parseFloat(test));

//==============================================

function calculateVolumeAndArea(val) {
    if (Number.isInteger(val) && val > 0) {
        let vCube = val * val * val;
        let sCube = val * val * 6;
        
        return `Объем куба: ${vCube}, площадь всей поверхности: ${sCube}`;
    } else {
        return 'При вычислении произошла ошибка';
    }
}

console.log(calculateVolumeAndArea(NaN));




function getCoupeNumber(num) {
    if (typeof(num) != 'number' || !Number.isInteger(num) || num < 0) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    } else if (num == 0 || num > 36) {
        return 'Таких мест в вагоне не существует';
    } else {
        return Math.ceil(num / 4);
    }
}

console.log(getCoupeNumber(-10));