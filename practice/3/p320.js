/*
Дан массив чисел. Необходимо вернуть новый массив, в котором останутся только те числа, 
которые повторялись более одного раза.

В итоговом массиве числа должны в том же порядке, в котором они были в исходном массиве.
*/

function nonUniqueNumbers(numbers) {
  const counter = {};

  for (const number of numbers) {
    counter[number] = (counter[number] ?? 0) + 1;
  }
  return numbers.filter((item) => counter[item] > 1);
}
