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

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
