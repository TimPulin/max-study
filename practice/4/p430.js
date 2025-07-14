/*
Реализуйте функции query, where и sort, которые позволяют преобразовывать данные.

Гарантируется, что:

в массиве все объекты гомогенные, то есть с одинаковыми полями;
в query пeредаются только результаты вызовов функций where и sort;
в sort передается существующий ключ объектов из массива, значение по которому является числом или строкой;
в where пeредаются ключ и значение, по которым мы фильтруем объекты.
*/

function query(...params) {
  return (data) => {
    let currentData = data;
    for (const param of params) {
      currentData = param(currentData);
    }
    return currentData;
  };
}

function where(key, value) {
  return (data) => {
    return data.filter((item) => item[key] === value);
  };
}

function sort(key) {
  return (data) => {
    return data.toSorted((a, b) => {
      if (typeof a[key] === "number") {
        return a[key] - b[key];
      }
      return String(a[key]).localeCompare(String(b[key]));
    });
  };
}
