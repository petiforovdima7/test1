let appData = {
    optionalExpenses: {}
}
function chooseOptExpenses() {
    let count = 0;
    for (let optionalExpenses = 0;  optionalExpenses < 3; optionalExpenses++) {
        let  a = "Статья номер";
        count++;
        appData.optionalExpenses[count]= a;
        console.log(appData.optionalExpenses);
    }
}
chooseOptExpenses();