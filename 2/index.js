let money = +prompt('Ваш бюджет на месяц', "0")
let time = prompt('Введите дату в формате YYYY-MM-DD', "YYYY-MM-DD")

const appData = {
    budget: money,
    timeData: time,
    expenses: {

    },
    optionalExpenses: {

    },
    income: [],
    savings: false
}
let res = appData.budget
for (let i = 0; i < 2; i++) {
    let a = prompt('Обязательная статья расходов в этом месяце',""),
        b = +prompt('Во сколько обойдется',"")

        if ((typeof a === 'string') && (typeof a != null)  && (typeof b != null)
        && a != '' && b != '' && a.length < 50 ) {
            console.log('done');
            appData.expenses[a] = b
            res -= b
        } else {
            i--
            continue
        }


}
appData.moneyPerDay = res / 30
alert('Ежедневный бюджет: ' + appData.moneyPerDay)

if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень');
} else {
    console.log('Ошибка');
}