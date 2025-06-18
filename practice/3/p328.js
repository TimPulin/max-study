/*
Две строки являются анаграммами, если с помощью перестановки букв в одной строке можно получить вторую. 
Например, ABBACA и BCBAAA являются анаграммами.

Функция groupAnagrams принимает массив строк и разбивает эти слова на группы слов так, чтобы в одной группе оказались слова-анаграммы.
*/

function groupAnagrams(words) {
  return groupByObj(words);
}


function groupByObj(words) {
  const groups = {};

  for (const word of words) {
    const key = createKey(word);
    groups[key] ??= [];
    groups[key].push(word)
  }

  return Array.from(Object.values(groups))
}


function groupByMap(words) {
   const groups = new Map();

  for (const word of words) {
    const key = createKey(word);
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key).push(word);
  }

  return Array.from(groups.values()) 
}

function createKey(str) {
  return Array
    .from(str).sort()
    .join('');
}
