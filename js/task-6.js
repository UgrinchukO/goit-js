let input;
let total = 0;

do {
  input = prompt('Insert the number!');
  if (isNaN(input) === true) {
    alert('Вы ввели не число, попробуйте еще раз');
  }
  total = total + +input;
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);
