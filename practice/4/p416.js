/*
Реализуйте аналог стандартного метода Map.groupBy.

Функция groupBy принимает iterable и callback, с помощью которого можно понять, к какой группе относится очередной элемент iterable.

Возвращает объект Map, где по ключам собраны элементы, относящиеся к одной группе.

Пример
Допустим, мы хотим сгруппировать слова по длине слова. Ключом мэпа будет являться число, длина строки, 
значением — массив элементов с такой длиной.

В качестве аргумента передается множество (Set) со словами и функция, превращающая слово в его длину.
*/

function groupBy(iterable, cb) {
  const map = new Map();

  const items = typeof iterable === "string" ? Array.from(iterable) : iterable;

  items.forEach((item, index) => {
    const key = cb(item, index);
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(item);
  });
  return map;
}
