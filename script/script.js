'use strict';

let money = +prompt("Ваш месячный доход?", 50000);
let income = "карманные расходы";
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
console.log(addExpenses.toLowerCase().split(", "));
let mission = 50000;
let deposit = confirm("Есть ли у вас депозит в банке?");

// Выведение типов данных в консоль

function showTypeOf(a) {
    return typeof a;
}
console.log(showTypeOf(money));
console.log(showTypeOf(income));
console.log(showTypeOf(deposit));

// Считаем расходы

let expenses1 = prompt("Введите обязательную статью расходов");
let amount1 = +prompt("Во сколько это обойдется?", 10000);
let expenses2 = prompt("Введите обязательную статью расходов");
let amount2 = +prompt("Во сколько это обойдется?", 10000);

let getExpensesMonth = function(a, b) {
    return a + b;
};
console.log("Сумма обязательных расходов: " + getExpensesMonth(amount1, amount2));

// Накопления за месяц

function getAccumulatedMonth(a, b, c) {
    return a - (b + c);
}
let accumulatedMonth = getAccumulatedMonth(money, amount1, amount2);
console.log("Бюджет на месяц: " + accumulatedMonth);

// Цель

function getTargetMonth(a, b) {
 return Math.ceil(a / b);
}
let targetMonth = getTargetMonth(mission, accumulatedMonth);
console.log("Цель будет достигнута за: " + targetMonth + " месяцев.");

let budgetDay = Math.ceil(accumulatedMonth / 30);
console.log('budgetDay: ', budgetDay);

let getStatusIncome = function() {
   if (budgetDay >= 1200) {
    return ("У вас высокий уровень дохода");
} else if (1200 > budgetDay >= 600) {
    return ("У вас средний уровень дохода");
} else if (0 <= budgetDay < 600) {
    return ("К сожалению у вас уровень дохода ниже среднего");
} else if (budgetDay < 0) {
    return ("Что то пошло не так");
} 
};
console.log(getStatusIncome());
