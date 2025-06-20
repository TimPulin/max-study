/*
Лотерейный билет представляет из себя двумерный массив, где каждый из подмассивов состоит из двух частей:

- комбинация букв произвольной длины;
- какое-то число.

Необходимо посчитать количество выигрышных комбинаций. Комбинация считается выигрышной, 
если код одного из символов в строке равен числу. Код символа — код из таблицы ASCII.
*/

function bingo(ticket) {
  let counter = 0;
  for (const [str, number] of ticket) {
    const options = Array.from(str).map((char) => char.charCodeAt(0));
    if (options.includes(number)) counter++;
  }

  return counter;
}
