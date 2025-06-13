/*
Напишите функцию, которая трансформирует цвет в формате rgb в цвет в формат hex.

Функция принимает три аргумента — целые числа от 0 до 255, задающие значения R, G и B.
*/

function rgb2hex(r, g, b) {
  let hex = "#";
  for (item of [r, g, b]) {
    hex += item.toString(16).padStart(2, "0");
  }
  return hex;
}
