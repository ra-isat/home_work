'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let start = document.getElementById("start");

let plusButton = document.getElementsByTagName("button"),
    incomePlus = plusButton[0],
    expensesPlus = plusButton[1];

let depositCheck = document.querySelector("#deposit-check"),
    additionalIncomeItem = document.querySelectorAll(".additional_income-item");

let budgetMonthValue = document.getElementsByClassName("budget_month-value")[0],
    budgetDayValue = document.getElementsByClassName("budget_day-value")[0],
    expensesMonthValue = document.getElementsByClassName("expenses_month-value")[0],
    additionalIncomeValue = document.getElementsByClassName("additional_income-value")[0],
    additionalExpensesValue = document.getElementsByClassName("additional_expenses-value")[0],
    incomePeriodValue = document.getElementsByClassName("income_period-value")[0],
    targetMonthValue = document.getElementsByClassName("target_month-value")[0];

// Обязательные расходы
let expensesTitle = document.querySelector(".expenses-title"),
    expensesItems = document.querySelectorAll('.expenses-items');

// месячный доход
let salaryAmount = document.querySelector(".salary-amount");

// дополнительный доход
let incomeTitle = document.querySelector(".income-title"),
    incomeAmount = document.querySelectorAll(".income-amount"),
    incomeItems = document.querySelectorAll('.income-items');

// возможные расходы
let additionalExpensesItem = document.querySelector(".additional_expenses-item");

// депозит 
let depositAmount = document.querySelector(".deposit-amount"),
    depositPercent = document.querySelector(".deposit-percent");

// цель 
let targetAmount = document.querySelector(".target-amount");

// период
let periodSelect = document.querySelector(".period-select");
let periodAmount = document.querySelector('.period-amount');

// Объект

start.disabled = true;
function loger() {
    if (salaryAmount.value === '') {
        start.disabled = true;
    } else {
        start.disabled = false;
    }
    
}
salaryAmount.addEventListener('keydown', loger);

let appData = {
    start: function() {
        
        appData.budget = salaryAmount.value;
        
        console.log('salaryAmount.value: ', salaryAmount.value);
        
        appData.getExpenses();
        appData.getExpensesMonth();        
        appData.getIncome();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();
        appData.showPeriod();

        appData.showResult();
    },
    showResult: function() {
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = appData.getTargetMonth();
        
        periodSelect.addEventListener('input', incomePeriodValue.value = appData.calcSavedMoney());
            
    },
    addExpensesBlock: function() {        
        let cloneExpensesItems = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItems, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');

        if(expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        }
    },
    addIncomeBlock: function() {
        let cloneIncomeItems = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');

        if(incomeItems.length === 3) {
            incomePlus.style.display = 'none';
        }
    },
    getExpenses: function() {
        expensesItems.forEach(function(item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;

            if(expensesItems !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    getIncome: function() {
        incomeItems.forEach(function(item) {
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;

            if(itemIncome !== '' && cashIncome !== '') {
                appData.income[itemIncome] = cashIncome;
            }
        });
    },
    getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(",");
        addExpenses.forEach(function(item) {
            item = item.trim();
            if (item !== "") {
                appData.addExpenses.push(item);
            }
        });
    },
    getAddIncome: function() {
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if(itemValue !== "") {
                appData.addIncome.push(itemValue);
            }
        });
    },
    showPeriod: function() {
        function eventFunc() {
            
            periodAmount.innerHTML = periodSelect.value;
            appData.showResult();
        }
        periodSelect.addEventListener('input', eventFunc);
        
    },
    
    income: {},
    addIncome: [],
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    period: 3,
    deposit: false,
    persentDeposit: 0,
    moneyDeposit: 0,
    addExpenses: [],
    expenses: {},
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
        return Math.ceil(targetAmount.value / appData.budgetMonth);
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
        return appData.budgetMonth * periodSelect.value;
    },
};
start.addEventListener('click', appData.start);

expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);


// appData.getTargetMonth();
// appData.getStatusIncome();
// appData.getInfoDeposit();
// appData.calcSavedMoney();

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

// console.log("Наша программа включает в себя данные:");
// for(let key in appData) {    
//     console.log(key + ' ' + appData[key]);
// }