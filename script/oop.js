const start = document.getElementById("start");

const plusButtonOne = document.getElementsByTagName("button")[0],
      plusButtonTwo = document.getElementsByTagName("button")[1];

const depositCheck = document.querySelector("#deposit-check"),
      additionalIncomeItem = document.querySelectorAll(".additional_income-item");

const budgetMonthValue = document.getElementsByClassName(".budget_month-value"),
      budgetDayValue = document.getElementsByClassName(".budget_day-value"),
        expensesMonthValue = document.getElementsByClassName(".expenses_month-value"),
        additionalIncomeValue = document.getElementsByClassName(".additional_income-value"),
        additionalExpensesValue = document.getElementsByClassName(".additional_expenses-value"),
        incomePeriodValue = document.getElementsByClassName(".income_period-value"),
        targetMonthValue = document.getElementsByClassName(".target_month-value");

// Обязательные расходы
const expensesTitle = document.querySelector(".expenses-title"),
      expensesAmount = document.querySelector(".expenses-amount");

// месячный доход
const salaryAmount = document.querySelector(".salary-amount");

// дополнительный доход
const incomeTitle = document.querySelector(".income-title"),
      incomeAmount = document.querySelector(".income-amount");

// возможные расходы
const additionalExpensesItem = document.querySelector(".additional_expenses-item");

// депозит 
const depositAmount = document.querySelector(".deposit-amount"),
      depositPercent = document.querySelector(".deposit-percent");

// цель 
const targetAmount = document.querySelector(".target-amount");

// период
const periodSelect = document.querySelector(".period-select");

