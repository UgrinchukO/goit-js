const logItems = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    let string = `${i + 1} - ${array[i]}`;

    console.log(string);
  }
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
const findLongestWord = function (string) {
  console.log(string.split(' '));
  const arr = string.split(' ');
  let longestWord = arr[0];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  return longestWord;
};