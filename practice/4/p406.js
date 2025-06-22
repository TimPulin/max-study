/*
Реализуйте аналог стандартного метода Array#map.

Это задача на работу с функциями. Поэтому map будет не методом массива, 
а функцией, принимающей два аргумента, первым из которых является массив.

Аргументы
array — The array map() was called upon.

callback — A function to execute for each element in the array. 
Its return value is added as a single element in the new array. The function is called with the following arguments:

element — The current element being processed in the array.
index — The index of the current element being processed in the array.
array — The array map() was called upon.
Возвращаемое значение
A new array with each element being the result of the callback function.
*/

function map(array, callback) {
  const mapped = [];

  for (let index = 0; index < array.length; index++) {
    if (index in array) {
      mapped.push(callback(array[index], index, array));
    }
  }

  return mapped;
}
