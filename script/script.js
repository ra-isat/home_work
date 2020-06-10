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

let posibleExpensesNameArray = addExpenses.split(", ");

let posibleExpensesCostArray = posibleExpensesNameArray.map(expensesName =>
    {
        let cost = +prompt(`Во сколько обходится "${expensesName}"?`, 10000);
        let percentProbability = +prompt(`С какой % вероятностью придется заняться "${expensesName}"?`, 33);
        if (percentProbability < 0 || percentProbability > 100){
            alert(`Забудем об "${expensesName}"...`);
            return 0;
        }
        return cost * percentProbability / 100;
    }
);

let accumulatePosibleCost = posibleExpensesCostArray.reduce((accumulate, cost) => accumulate + cost);
console.log("Средняя сумма возможных расходов: " + accumulatePosibleCost);

let necessaryExpensesCostArray = new Array(2);

for (let i = 0; i < necessaryExpensesCostArray.length; i++) {
    prompt("Введите обязательную статью расходов"); // why??
    necessaryExpensesCostArray[i] = +prompt("Во сколько это обойдется?", 10000);
}

let accumulateNecessaryCost = necessaryExpensesCostArray.reduce((accumulate, cost) => accumulate + cost);
console.log("Сумма обязательных расходов: " + accumulateNecessaryCost);

// Накопления за месяц

function getAccumulatedMonth(a, b, c) {
    return a - (b + c);
}

let accumulatedMonth = getAccumulatedMonth(
    money, accumulateNecessaryCost, accumulatePosibleCost);
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
