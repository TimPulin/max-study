/*
Реализуйте функцию, которая проверяет, что два массива равны.

Два массива равны, если содержат одинаковые элементы. 
Порядок элементов при этом может отличаться. 
Значения считаются равными, если они равны через Object.is.
*/

function equalArrays(arr1, arr2) {
  const counter = new Map();

  if (arr1.length !== arr2.length) return false;

  for (const item of arr1) {
    const key = createKey(item);
    const amount = (counter.get(key) ?? 0) + 1;
    counter.set(key, amount);
  }

  for (const item of arr2) {
    const key = createKey(item);

    if (!counter.has(key)) return false;
    const amount = counter.get(key) - 1;
    counter.set(key, amount);
  }

  return counter.values().every((value) => value === 0);
}

function createKey(item) {
  let formattedItem = Array.isArray(item) ? item.toSorted() : item;
  formattedItem =
    typeof formattedItem === "object" && formattedItem !== null
      ? JSON.stringify(formattedItem)
      : formattedItem;

  return formattedItem;
}

const arr1 = [{ x: 1 }, { x: 3 }, 0, { x: 2 }];
const arr3 = [[3, 2, 1], { x: 1 }, [1, 3, 2]];
const arr2 = arr1.toSorted();
console.log(arr2);

console.log(equalArrays(arr1, arr2));
