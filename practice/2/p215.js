
/*
Для данной строки верните массив с индексами символов больших букв (A, B, ..., Z).
*/
// NOTE проверка char === char.toUpperCase() пропускает цифры
const CAPITALS_PATTERN = /[A-ZА-Я]/;
function findCapitals(word) {
  const capitals = [];
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (CAPITALS_PATTERN.test(char)) capitals.push(i);
  }
  return capitals;
}




