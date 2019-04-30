
var money = prompt('Ваш бюджет в месяц?');
var time = prompt('Введите дату в формате YYYY-MM-DD');

var appData =  new Object();
appData.money = money;
appData.timeData = time;

var expensesSpendThisMons = prompt('Введите обязательную статью расходов в этом месяце');
var expensesHowMatch = prompt('Во сколько обойдется?');

var expenses = {expensesSpendThisMons, expensesHowMatch};
var optionalExpenses = {};
var income = {};
savings: false;

var moneyForMonth = money/30;

alert(moneyForMonth);



