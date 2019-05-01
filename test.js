let money, time;

function start() {
    money = +prompt('Ваш бюджет в месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == "" || money == null){
        money = +prompt('Ваш бюджет в месяц?', '');
    }
}
start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let  a = prompt("Введите обязательную статью расходов в этом месяце", ''),
             b = prompt("Во сколько обойдеться", '');
        
        if ( (typeof(a))=== 'string' && (typeof(a)) != null  && (typeof(a)) != null 
        && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;     
        } else {
            i = i - 1;
        }    
    }
}

chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert( "Ежедневный бюджет " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel(){
    if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Ошибка");
    }
}
detectLevel();



function chooseOptExpenses() {
    let start = 0;
    for (let optionalExpenses = 0;  optionalExpenses < 3; optionalExpenses++) {
        let  a = prompt("Статья необязательных расходов?", '');
        start++;
        appData.optionalExpenses[start] = a;
        console.log(appData.optionalExpenses);
    }
}



function checkSavings() {
    if (appData.savings == true){
        let save = +prompt("Какова сумма накоплений?"),
            perc = +prompt("Под какой процент");
        
        appData.monthIncome = save/100/12*perc;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);   
    }
}
checkSavings();

