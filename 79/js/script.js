// Rest

const log = function(a, b, ...rest) {
    console.log(a, b, rest);
}

log('basic', 'rest', 'operator', 'usage');


// Default options

function calcOrDouble(num, basis = 2) {
    console.log(num * basis);
}

calcOrDouble(3);