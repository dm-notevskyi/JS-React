'use strict';

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        let result = `Мне ${plan.age} и я владею языками: `;

        for (let item of plan.skills.languages) {
            result += `${item.toUpperCase()} `
        }

        return result;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));


function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

console.log(showExperience(personalPlanPeter));


function showProgrammingLangs(plan) {
    if (Object.keys(plan.skills.programmingLangs).length) {
        let result = '';

        for (let key in plan.skills.programmingLangs) {
            result += `Язык ${key} изучен на ${plan.skills.programmingLangs[key]}\n`;
        }

        return result;
    } else {
        return '';
    }
}

console.log(showProgrammingLangs(personalPlanPeter));

// ==========================================

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';

    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

    arr.forEach(member => {
        str += `${member} `
    });

    return str;
}

console.log(showFamily(family));


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase());
    });
}

console.log(standardizeStrings(favoriteCities));


const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        return 'Ошибка!';
    }

    // return str.split('').reverse().join('');

    let result = '';

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}

console.log(reverse(someString));


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let result = '';

    arr.length === 0 ? result = 'Нет доступных валют' : result = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            result += `${curr}\n`;
        }
    });

    // for (let item of arr) {
    //     if (item !== missingCurr) result += `${item}\n`;
    // }

    return result;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'RUB'));