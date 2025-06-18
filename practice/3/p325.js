/*
Реализуйте функцию mergeObjects, которая позволяет объединять произвольное количество объектов в один новый объект.

Если у нескольких объектов есть свойство с одинаковым ключом, в итоговом объекте нужно взять значение последнего объекта с этим свойством.
*/
function mergeObjects(...objects) {
  let mergedObj = {};
  for (const obj of objects) {
    Object.assign(mergedObj, obj)
  }

  return mergedObj;
}