let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

  while (isNaN(money) || money === "" || money === null) {
    money = +prompt("Ваш бюджет на месяц", "");
  }
}

start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses() {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Обязательная статья расходов в этом месяце", ""),
        b = +prompt("Во сколько обойдется", "");

      if (
        typeof a === "string" &&
        typeof a !== null &&
        typeof b !== null &&
        a !== "" &&
        b !== "" &&
        a.length < 50
      ) {
        console.log("done");
        appData.expenses[a] = b;
      } else {
        i--;
      }
    }
  },
  detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
  },
  detectLevel() {
    if (appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень");
    } else {
      console.log("Ошибка");
    }
  },
  checkSavings() {
    if (appData.savings) {
      let save = +prompt("Какова сумма накоплений", "0"),
        percent = +prompt("Под какой процент", "");

      appData.monthIncome = (save / 100 / 12) * percent;
      alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
    }
  },
  chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
      let ans = prompt("Статья необязательных расходов", "");
      appData.optionalExpenses[i] = ans;
    }
  },
  chooseIncome() {
    let less = true;
    while (less) {
      let items = prompt(
        "Что принесет дополнительный доход? (Перечислить через запятую)",
        ""
      );
      if (items !== "" && items !== null) {
        less = false;
        appData.income = items.split(",");
      }
    }
    appData.income.push(prompt("Может что-то еще?", ""));
    appData.income.sort();

    appData.income.forEach((item, i) => {
      alert(`Способы доп. заработка: ${i + 1}: ${item}`);
    });
  },
};
for (let item in appData) {
  alert(`Наша программа включает в себя данные: ${item}`);
}
