let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Insert the number!');
  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    numbers.push(input);
  }
} while (input !== null);

if (numbers.length !== 0) {
  for (let i = 0; i < numbers.length; i += 1) {
    total = total + +numbers[i];
  }
}
alert(`Общая сумма чисел равна ${total}`);
