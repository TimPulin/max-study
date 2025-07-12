/*
Функция frequency позволяет посчитать, сколько раз встречается каждый элемент массива. 
В базовой версии она принимает один аргумент — массив и возвращает массив пар, состоящих из значения и частоты. 
По умолчанию пары отсортированы по значению.


console.log(frequency(['Peter', 'Anna', 'Rose', 'Peter', 'Peter', 'Anna']));
// [["Anna", 2], ["Peter", 3], ["Rose", 1]]

console.log(frequency([1, 10, 12, 2, 1, 10, 2, 2]));
// [[1, 2], [2, 3], [10, 2], [12, 1]]
Дополнительно можно указать второй аргумент options, который может содержать поля criteria и compareTo, оба необязательные.
*/

function frequency(arr, options) {
  const map = new Map();

  for (const item of arr) {
    const key = options?.criteria?.(item) ?? item;
    map.set(key, (map.get(key) ?? 0) + 1);
  }

  return Array.from(map.entries()).sort(([aKey, aValue], [bKey, bValue]) => {
    return (
      options?.compareTo?.(aKey, bKey, aValue, bValue) ??
      defaultCompareTo(aKey, bKey)
    );
  });
}

function defaultCompareTo(value1, value2) {
  if (typeof value1 === "string") {
    return value1.localeCompare(value2);
  } else if (["number", "boolean"].includes(typeof value1)) {
    return value1 - value2;
  }
}

console.log(frequency(["Peter", "Anna", "Rose", "Peter", "Peter", "Anna"]));
// [["Anna", 2], ["Peter", 3], ["Rose", 1]]

console.log(frequency([1, 2, 3, 4, 5, 6, 7], { criteria: parity }));

console.log(
  frequency([1, 10, 12, 2, 1, 10, 2, 2], { compareTo: alphabeticalCompare })
);

function parity(number) {
  return number % 2 === 0 ? "even" : "odd";
}

function alphabeticalCompare(value1, value2) {
  return String(value1).localeCompare(String(value2));
}
