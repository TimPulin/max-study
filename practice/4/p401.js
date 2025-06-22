/*
Реализуйте аналог стандартного метода Array#filter.

Это задача на работу с функциями. Поэтому filter будет не методом массива, а функцией, 
принимающей два аргумента, первым из которых является массив.

Аргументы
array — The array filter() was called upon.

callback — A function to execute for each element in the array. 
It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise. 

The function is called with the following arguments:
element — The current element being processed in the array.
index — The index of the current element being processed in the array.
array — The array filter() was called upon.

Возвращаемое значение
A shallow copy of the given array containing just the elements 
that pass the test. If no elements pass the test, an empty array is returned.
*/

// NOTE проверки как в Array.prototype.filter
function filter(array, callback) {
  if (typeof callback !== "function")
    throw new Error(`${callback} in not a function`);
  if (!Array.isArray(array)) {
    throw new Error(`Expect array, got ${array}`);
  }

  const filtered = [];

  for (let index = 0; index < array.length; index++) {
    if (index in array && callback(array[index], index, array)) {
      filtered.push(array[index]);
    }
  }
  return filtered;
}
