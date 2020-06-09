'use strict';

let money = +prompt("Ваш месячный доход?");
let income = "карманные расходы";
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
console.log(addExpenses.toLowerCase().split(", "));
let mission = 50000;
let deposit = confirm("Есть ли у вас депозит в банке?");

let expenses1 = prompt("Введите обязательную статью расходов");
let amount1 = +prompt("Во сколько это обойдется?");
let expenses2 = prompt("Введите обязательную статью расходов");
let amount2 = +prompt("Во сколько это обойдется?");

let budgetMonth  = money - (amount1 + amount2);
console.log('budgetMonth: ', budgetMonth);

let budgetDay = Math.floor(budgetMonth / 30);
console.log('budgetDay: ', budgetDay);

if (budgetDay >= 1200) {
    console.log("У вас высокий уровень дохода");
} else if (1200 > budgetDay >= 600) {
    console.log("У вас средний уровень дохода");
} else if (0 <= budgetDay < 600) {
    console.log("К сожалению у вас уровень дохода ниже среднего");
} else if (budgetDay < 0) {
    console.log("Что то пошло не так");
}

console.log("Цель будет достигнута за: " + Math.ceil(mission / budgetMonth) + " месяцев.");
let period = 6;


console.log(typeof money);
console.log(typeof income);
console.log(typeof addExpenses);

console.log("Период равен " + period + " месяцев.");
console.log("Цель заработка " + mission + " руб.");

console.log(addExpenses.length);