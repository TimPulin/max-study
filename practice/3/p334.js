/*
Дан массив чисел. Переставьте в элементы так, чтобы четные числа остались на своих местах, а нечетные — отсортировались по возрастанию между собой.
*/

function sortArray(arr) {
  const oddSorted = arr
  .filter(item => !isEven(item))
  // NOTE в brave без a - b сортировка работает некорректно
  .sort((a, b) => a - b);

  let oddIterator = oddSorted[Symbol.iterator]();

  return arr
    .map(item => isEven(item) ? item : oddIterator.next().value)
}

function isEven(number) {
  return number % 2 === 0;
}

const arr = [3, 6, 4, 1];

console.log(sortArray(arr));
