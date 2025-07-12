/*
Функция group принимает массив arr и функцию isEqual, определяющую, равны два значения или нет.

Результатом является массив из массивов. В каждом вложенном массиве собраны все элементы, 
которые равны между собой с точки зрения функции isEqual.
*/

function group(arr, isEqual) {
  const groups = [];
  const used = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (!used.has(i)) {
      const group = [];
      group.push(arr[i]);
      used.add(i);

      for (let j = i + 1; j < arr.length; j++) {
        if (isEqual(arr[i], arr[j])) {
          group.push(arr[j]);
          used.add(j);
        }
      }
      groups.push(group);
    }
  }
  return groups;
}
