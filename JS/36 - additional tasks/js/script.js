const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let allS = 0;
    let allV = 0;
    let budget;
    
    for (let item of data.shops) {
        allS += item.width * item.length;
    }
    
    allV = allS * data.height;
    budget = allV * data.moneyPer1m3;
    
    if (budget <= data.budget) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }
}

console.log(isBudgetEnough(shoppingMallData));

//===============================================

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    let g1 = [], 
        g2 = [], 
        g3 = [], 
        rest = [];
    
    arr.sort();

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            g1.push(arr[i]);
        } else if (i < 6) {
            g2.push(arr[i]);
        } else if (i < 9) {
            g3.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [g1, g2, g3, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
}

console.log(sortStudentsByGroups(students));