/*
Программисты любят сокращать длинные слова — i18n (internationalization), a10y (availability), k8s (kubernetes). 
Типа, первая и последняя буквы, а между ними число — сколько букв между ними в оригинальном слове.

Реализуйте функцию abbreviate, которая принимает строку и возвращает новую строку, 
где все длинные слова будут заменены на сокращенные версии.

Слово — последовательность символов, состоящая из букв латинского алфавита. Длинное слово — слово, в котором хотя бы 4 буквы.
*/

function abbreviate(string) {
  let result = [];
  const wordList = string.split(" ");
  for (const word of wordList) {
    const { punctuation, word: cleanWord } = trimEndPunctuation(word);
    result.push(`${encode(cleanWord)}${punctuation}`);
  }
  return result.join(" ");
}

function abbreviate2(string) {
  return string.replaceAll(
    /[a-z]{4,}/gi,
    (item) => `${item[0]}${item.length - 2}${item.at(-1)}`
  );
}

const LONG_WORD_LENGTH = 4;
const BAR_SEPARATOR = "-";
function encode(word) {
  const result = [];
  const splitted = word.split(BAR_SEPARATOR);
  for (const item of splitted) {
    const encoded =
      item.length >= LONG_WORD_LENGTH
        ? `${item[0]}${item.length - 2}${item[item.length - 1]}`
        : item;
    result.push(encoded);
  }

  return result.join(BAR_SEPARATOR);
}

const PUNCTUATION = /\p{P}+$/u;
function trimEndPunctuation(word) {
  const match = word.match(PUNCTUATION);

  const punctuation = match ? match[0] : "";
  const cleanWord = match ? word.slice(0, match.index) : word;

  return {
    punctuation,
    word: cleanWord,
  };
}
