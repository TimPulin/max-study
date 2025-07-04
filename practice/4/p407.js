/*
Напишите функцию zip, которая объединяет элементы двух массивов, используя функцию-колбэк.

Аргументы
a — первый массив.
b — второй массив.
callback — функция, которая принимает элемент первого массива и элемент второго массива 
и возвращает значение для соответствующего элемента итогового массива.

Если массивы разной длины, то длина итогового массива равна длине более короткого. 
Оставшиеся элементы более длинного массива игнорируются.
*/

function zip(a, b, callback) {
  const zipped = [];

  for (let index = 0; index < Math.min(a.length, b.length); index++) {
    if (index in a && index in b) {
      zipped.push(callback(a[index], b[index]));
    }
  }

  return zipped;
}
