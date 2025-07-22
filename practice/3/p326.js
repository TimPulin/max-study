/*
Реализуйте функцию filterByShape, принимающую массив объектов и объект со значениями, по которым необходимо фильтровать.
*/

function filterByShape(arr, filterBy) {
  const filterKeys = Object.keys(filterBy);

  return arr.filter((item) => {
    return filterKeys.every(
      (key) =>
        (item[key] === filterBy[key]) ^ everyIsNaN([item[key], filterBy[key]])
    );
  });
}

function everyIsNaN(arr) {
  return arr.values().every((item) => Number.isNaN(item));
}
