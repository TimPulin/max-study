/*
Реализуйте аналог стандартного метода Array#some.

Это задача на работу с функциями. Поэтому some будет не методом массива, а функцией, принимающей два аргумента, 
первым из которых является массив.

Аргументы
array — The array some() was called upon.

callback — A function to execute for each element in the array. 
It should return a truthy value to indicate the element passes the test, and a falsy value otherwise. 
The function is called with the following arguments:

element — The current element being processed in the array.
index — The index of the current element being processed in the array.
array — The array some() was called upon.
Возвращаемое значение
false unless callbackFn returns a truthy value for an array element, in which case true is immediately returned.
*/

function some(array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (index in array && callback(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
