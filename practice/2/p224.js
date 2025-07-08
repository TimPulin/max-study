/*
Преобразуйте строку из kebab case в camel case.

Гарантируется, что в исходной строке нет прописных букв (upper case), а слова разделены дефисами (-).
*/

const SEPARATOR = "-";
function toCamelCase(kebabCase) {
  return formatByImperative(kebabCase);
}

// NOTE можно ли записать условия короче?
function formatByImperative(kebabCase) {
  let result = "";
  let isCapitalizeNext = false;

  for (char of kebabCase) {
    let currentChar = char;

    if (char === SEPARATOR) {
      currentChar = "";
      isCapitalizeNext = true;
    } else if (isCapitalizeNext) {
      currentChar = char.toUpperCase();
      isCapitalizeNext = false;
    }

    result += currentChar;
  }

  return result;
}

function formatByFunctional(kebabCase) {
  return kebabCase
    .split(SEPARATOR)
    .map((word, index) => {
      return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
}

console.log(formatByFunctional("aaaa-dddd-tttt"));
