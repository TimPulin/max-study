/*
Для данной строки верните массив с индексами символов больших букв (A, B, ..., Z).
*/
// NOTE проверка char === char.toUpperCase() пропускает цифры

// https://maxcode.dev/cheatsheets/ascii/

const code = "M".charCodeAt(); // 77
const codeSmall = "m".charCodeAt(); // 77 + 32

console.log(code.toString(2)); // 1001101
console.log(codeSmall.toString(2)); // 1001101

// anycode   mask      small letter
// 1001101 | 0100000 = 1101101

console.log(
  "HelloWorld"
    .split("")
    .map((letter) => letter.charCodeAt(0))
    .map((code) => code ^ 32)
    .map((code) => String.fromCharCode(code))
    .join("")
);

// 0 & 0 = 0
// 0 & 1 = 0
// 1 & 0 = 0
// 1 & 1 = 1

const CAPITALS_PATTERN = /[A-ZА-ЯЁ]/;
function findCapitals(word) {
  const capitals = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] >= "A" && word[i] <= "Z") {
      capitals.push(i);
    }
    // if (CAPITALS_PATTERN.test(word[i])) {
    //   capitals.push(i);
    // }
  }
  return capitals;
}
