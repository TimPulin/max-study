/*
Лотерейный билет представляет из себя двумерный массив, где каждый из подмассивов состоит из двух частей:

- комбинация букв произвольной длины;
- какое-то число.

Необходимо посчитать количество выигрышных комбинаций. Комбинация считается выигрышной, 
если код одного из символов в строке равен числу. Код символа — код из таблицы ASCII.
*/

// https://maxcode.dev/problems/lottery-ticket/

function bingo(ticket) {
  let counter = 0;
  for (const [str, number] of ticket) {
    // const isMiniWin = Array.from(str).map((char) => char.charCodeAt(0)).includes(number);
    // const isMiniWin = Array.from(str).some((char) => char.charCodeAt(0) === number);
    const isMiniWin = Iterator.from(str).some(
      (char) => char.charCodeAt(0) === number
    );
    if (isMiniWin) {
      counter++;
    }
  }

  return counter;
}
