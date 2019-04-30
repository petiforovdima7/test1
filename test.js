
let money = +prompt('Ваш бюджет в месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

// 1
// for (let i = 0; i < 2; i++) {
//     let  a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//          b = prompt("Во сколько обойдеться", '');
    
//     if ( (typeof(a))=== 'string' && (typeof(a)) != null  && (typeof(a)) != null 
//     && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;     
//     }     
// };
// 2
// let i = 0;
// while (i < 2) {
//     let  a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//          b = prompt("Во сколько обойдеться", '');
//          appData.expenses[a] = b;
//          i++;     
// };


appData.moneyPerDay = appData.budget / 30;

alert( "Ежедневный бюджет " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Ошибка");
};


