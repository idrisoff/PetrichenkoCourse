let money = +prompt('Ваш бюджет на месяц', "0")
let time = prompt('Введите дату в формате YYYY-MM-DD', "YYYY-MM-DD")

const appData = {
    money: money,
    timeData: time,
    expenses: {

    },
    optionalExpenses: {

    },
    income: [],
    savings: false
}

let a = prompt('Обязательная статья расходов в этом месяце',"")
let b = +prompt('Во сколько обойдется',"")
appData.expenses.a = b
let c = prompt('Обязательная статья расходов в этом месяце',"")
let d = +prompt('Во сколько обойдется',"")
appData.expenses.c = d
alert((money - appData.expenses.a - appData.expenses.c)/30)