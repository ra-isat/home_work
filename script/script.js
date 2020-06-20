'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let isString = function(n) {
    return isNaN(parseFloat(n)) && n !== null && (n.trim() !== "");    
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
    persentDeposit: 0,
    moneyDeposit: 0,
    addExpenses: [],
    expenses: {},
    asking() {

        if(confirm('Есть ли дополнительный зарабаток?')) {
            let itemIncome;
            do {
                itemIncome = prompt("Какой у вас доп зарабаток?", 'фриланс');
            } while(!isString(itemIncome));
            
            let cashIncome;
            do {
                cashIncome = prompt("Сколько это приносит?", "5000");
            } while(!isNumber(cashIncome));
            this.income[itemIncome] = cashIncome;
        }
 
        let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
        appData.addExpenses = addExpenses.toLowerCase().split(", ");
        console.log(appData.addExpenses);
        appData.deposit = confirm("Есть ли у вас депозит в банке?");
        let expenses,
            expensesMonth;
        for (let i = 0; i < 2; i++) {
    
            do {
                expenses = prompt("Введите обязательную статью расходов", 'кофе');
            } while(!isString(expenses));          
    
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
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth() {
        return Math.ceil(this.mission / this.budgetMonth);
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
    getInfoDeposit() {
        if (this.deposit)  {
            let check;
            do {
                check = prompt('Какой процент вклада?', '10');
            } while (!isNumber(check));
            this.persentDeposit = check;

            do {
                check = prompt("Какова сумма вклада?", "10000");
            } while (!isNumber(check));
            this.moneyDeposit = check;          
        }
    },
    calcSavedMoney() {
        return this.budgetMonth * this.period;
    },
};
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
appData.getInfoDeposit();
appData.calcSavedMoney();

if (appData.getTargetMonth() > 0) {
    console.log("Цель будет достигнута за: " + appData.getTargetMonth() + " месяцев.");
} else {
    console.log("Цель не будет достигнута");
}

let res = "";
for (let value of appData.addExpenses) {
    value = value[0].toUpperCase() + value.substring(1);
    res +=value + (', ');
}
console.log(res);

console.log("Наша программа включает в себя данные:");
for(let key in appData) {    
    console.log(key + ' ' + appData[key]);
}