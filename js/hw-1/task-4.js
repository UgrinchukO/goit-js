const credits = 23580;
const pricePerDroid = 3000;

let question = prompt('Hello, how many droids do you want to buy?');
let totalPrice = +question * pricePerDroid;

if (question === null) {
  console.log('Is canseled by user!');
} else if (totalPrice > credits) {
  console.log('Not enough funds in the account!');
} else {
  alert(`Вы купили ${question} дроидов, на счету осталось ${credits-totalPrice} кредитов`);
}
