'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    start = function() {
        do {
        money = prompt("Ваш месячный доход?", 50000);
        } while (!isNumber(money));       
    };  
start();

// Объект

let appData = {
    mission: 50000,
    income: {},
    addIncome: [],
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    period: 3,
    deposit: false,
    addExpenses: [],
    expenses: {},
    asking() {
        let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
        appData.addExpenses = addExpenses.toLowerCase().split(", ");
        console.log(appData.addExpenses);
        appData.deposit = confirm("Есть ли у вас депозит в банке?");
        let expenses,
            expensesMonth;
        for (let i = 0; i < 2; i++) {
    
            expenses = prompt("Введите обязательную статью расходов", 'кофе');
    
            do {
                expensesMonth = prompt("Во сколько это обойдется?", 10000);
            } while (!isNumber(expensesMonth));

            appData.expenses[expenses] = expensesMonth;
        }
        console.log(appData.expenses);
    },
    getExpensesMonth() {
        let sum = 0;
        for(let key in appData.expenses) {            
            sum += +appData.expenses[key];            
        }
        appData.expensesMonth = sum;
        console.log("Расходы за месяц: " + appData.expensesMonth);
    },
    getBudget() {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.ceil(appData.budgetMonth / 30);
    },
    getTargetMonth() {
        appData.period = Math.ceil(this.mission / this.budgetMonth);
        if (appData.period > 0) {
            console.log("Цель будет достигнута за: " + appData.period + " месяцев.");
        } else {
            console.log("Цель не будет достигнута");
        }
    },
    getStatusIncome() {
        if (appData.budgetDay >= 1200) {
            return ("У вас высокий уровень дохода");
        } else if (1200 > appData.budgetDay >= 600) {
            return ("У вас средний уровень дохода");
        } else if (0 < appData.budgetDay < 600) {
            return ("К сожалению, у вас уровень дохода ниже среднего");
        } else if (appData.budgetDay < 0) {
            return ("Что то пошло не так");
        }
     },
};
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
console.log(appData.getStatusIncome());

console.log("Наша программа включает в себя данные:");
for(let key in appData) {    
    console.log(key + appData[key]);
}