'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
let income = "карманные расходы";
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
console.log(addExpenses.toLowerCase().split(", "));
let mission = 50000;
let deposit = confirm("Есть ли у вас депозит в банке?");

// Старт
let start = function() {
    do {
       money = prompt("Ваш месячный доход?", 50000);
    } while (!isNumber(money));       
};  
start();

// Выведение типов данных в консоль

function showTypeOf(a) {
    return typeof a;
}
console.log(showTypeOf(money));
console.log(showTypeOf(income));
console.log(showTypeOf(deposit));

// Считаем расходы

let expenses = [];

let getExpensesMonth = function() {
    let sum = 0;

    for (let i = 0; i < 2; i++) {

        expenses[i] = prompt("Введите обязательную статью расходов", 'кофе');

        let check;
        do {
            check = prompt("Во сколько это обойдется?", 10000);
        } while (!isNumber(check));

        sum += +check;
        console.log('sum: ', sum);
    }
    return sum;
};

let expensesAmount = getExpensesMonth();
console.log('Обязательные расходы: ', expensesAmount);


// Накопления за месяц

let getAccumulatedMonth = function() {
    return money - expensesAmount;
};
let accumulatedMonth = getAccumulatedMonth();
console.log("Бюджет на месяц: " + accumulatedMonth);

// Цель

function getTargetMonth(a, b) {
 return Math.ceil(a / b);
}
let targetMonth = getTargetMonth(mission, accumulatedMonth);
if (targetMonth > 0) {
    console.log("Цель будет достигнута за: " + targetMonth + " месяцев.");
} else {
    console.log("Цель не будет достигнута");
}


let budgetDay = Math.ceil(accumulatedMonth / 30);
console.log('budgetDay: ', budgetDay);

let getStatusIncome = function() {
   if (budgetDay >= 1200) {
    return ("У вас высокий уровень дохода");
} else if (1200 > budgetDay >= 600) {
    return ("У вас средний уровень дохода");
} else if (0 < budgetDay < 600) {
    return ("К сожалению, у вас уровень дохода ниже среднего");
} else if (budgetDay < 0) {
    return ("Что то пошло не так");
} 
};
console.log(getStatusIncome());