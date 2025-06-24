/*
Проверьте, что все числа массива arr не больше числа limit.
*/

function smallEnough(numbers, limit) {
  return numbers.every(number => number <= limit);
}

