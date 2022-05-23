// let money = prompt("Ваш бюджет на месяц?");
// let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
   // budget: money,
   // time,
   expenses: {},
   optionalExpenses: {},
   income: [],
   savings: false,
};



for (let i = 0; i < 1; i++) {
   let a = prompt("Введите обязательную сумму расходов в этом месяце");
   let b = prompt("Во сколько обойдется?");
   appData.expenses = { a, b };

   if (a != null && b != null && a != "" && b != "") {
      console.log("Первое условие");
   } else {
      i = i - 1
   }
}

// let summa = appData.budget / 30;

// // console.log(summa);
// console.log(appData.expenses);




/*



let i = 0;

while (i < 1) {
   let a = prompt("Введите обязательную статью расходов в этом месяце");
   let b = prompt("Во сколько обойдется?");
   i++;
   if (typeof (a) === "string" && typeof (a) != null && typeof (b) != null && a != "" && b != "") {
      console.log("БИБА");
   } else {

   }

}
*/