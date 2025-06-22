/*
Реализуйте функцию bifurcate, которая разбивает элементы массива на две группы по заданному признаку.

Аргументы
array — массив, элементы которого нужно разбить на группы
predicate — функция, вызываемая на каждом элементе массива. Если она возвращает true, 
то элемент попадает в первую группу, если false — во вторую.

element — элемент массива
index — индекс элемента
array — массив, для которого вызывается функция

Возвращаемое значение
Массив из двух массивов: в первом лежат элементы, который удовлетворяют свойству, 
задаваемому через колбэк predicate, во втором — все остальные элементы.
*/

function bifurcate(array, predicate) {
  const truthy = [];
  const falsy = [];

  for (let index = 0; index < array.length; index++) {
    if (index in array && predicate(array[index], index, array)) {
      truthy.push(array[index]);
    } else {
      falsy.push(array[index]);
    }
  }

  return [truthy, falsy];
}
