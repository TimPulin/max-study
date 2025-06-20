/*
Дана строка, состоящая из нескольких слов. Необходимо переставить слова так, чтобы сначала шли самые частые.

Если какие-то слова встречаются одинаковое число раз, раньше должно идти то, которое идет раньше алфавиту (то есть в лексикографическом порядке).
*/

function sortByFreq(str) {
  const wordCounter = {};
  const words = str.split(' ');

  for (const word of words) {
    wordCounter[word] = (Object.hasOwn(wordCounter, word) ? wordCounter[word] : 0) + 1;
  }

  console.log(wordCounter);
  

  return words
  .sort((a, b) => {
    if (wordCounter[a] !== wordCounter[b]) {
      return wordCounter[b] - wordCounter[a];
    }

    return a.localeCompare(b);
  })
  .join(' ')
    
}


const str = 'the constructor method is a special method of a class for creating and initializing an object instance of that class';
console.log(sortByFreq(str));
