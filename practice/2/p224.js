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

  for (const char of kebabCase) {
    if (char === SEPARATOR) {
      isCapitalizeNext = true;
    } else if (isCapitalizeNext) {
      isCapitalizeNext = false;
      result += char.toUpperCase();
    } else {
      result += char;
    }
  }

  return result;
}

function formatByFunctional(kebabCase) {
  return kebabCase
    .toLowerCase()
    .replaceAll(/-(.)/gi, (_, char) => char.toUpperCase());

  // return kebabCase
  //   .split(SEPARATOR)
  //   .map((word, index) => {
  //     return index === 0 ? word : word[0].toUpperCase() + word.slice(1);
  //   })
  //   .join("");
}

console.log(formatByFunctional("Aaaa-50Dddd-Tttt"));
