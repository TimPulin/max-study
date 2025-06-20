/*
Отсортируйте массив строк по убыванию максимального количества последовательно идущих гласных в строке. 
Гласными считаются символы aeiouAEIOU.
*/


function sortStringsByVowels(strings) {
  return strings
    .map(str => ({
      str,
      maxVowels: calcMaxLengthSequence(str),
    }))
  .sort((a, b) => b.maxVowels - a.maxVowels)
  .map(item => item.str);
}

const VOWELS_PATTERN = /[aeiou]+/gi;
function calcMaxLengthSequence(str) {
    // NOTE в инете пишут, что matchAll возвращает итератор, у которого нет метода reduce, хотя работает
    const matches = str.matchAll(VOWELS_PATTERN);
    return matches.reduce((max, item) => item[0].length > max ? item[0].length : max, 0);
}

const arr = [
  'dfdddaaaa',
  ';lkoooooooo',
  ';'
]
console.log(sortStringsByVowels(arr));
