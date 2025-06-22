/*
Реализуйте аналог стандартного метода Array#every.

Это задача на работу с функциями. Поэтому every будет не методом массива, а функцией, принимающей два аргумента, первым из которых является массив.

Аргументы
array — The array every() was called upon.

callback — A function to execute for each element in the array. 

It should return a truthy value to indicate the element passes the test, 
and a falsy value otherwise. The function is called with the following arguments:

element — The current element being processed in the array.
index — The index of the current element being processed in the array.
array — The array every() was called upon.
Возвращаемое значение
true unless callbackFn returns a falsy value for an array element, in which case false is immediately returned.
*/

function every(array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (index in array && !callback(array[index], index, array)) {
      return false;
    }
  }
  return true;
}
