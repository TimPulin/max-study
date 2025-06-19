/*
В этой задаче требуется отсортировать массив. Прочитать про сортировку можно в статье на MDN. Более подробно я объясняю в видео на YouTube.

Трансформируйте объект в массив. Пары ключ-значение должны быть отсортированы по ключу в лексикографическом порядке (по алфавиту).
*/

function convertHashToArray(hash){
  return Object.entries(hash)
    .sort(([key1], [key2]) => key1.localeCompare(key2))
 
}

const  hash = {
  name: 'aaa',
  args: 'bbb',
  age: 'ccc',
  desc: 'ddd',
  number: 'eee'
}

console.log(convertHashToArray(hash));
