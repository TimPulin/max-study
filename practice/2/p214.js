/*
Реализуйте функцию, которая принимает произвольное количество слов и объединяет их в одну строку.
*/

function formatWords(...words) {
  let separator = "";
  let result = "";

  const lastIndex = words.length - 1;
  for (let i = 0; i <= lastIndex; i++) {
    separator = chooseSeparator(i, lastIndex);
    result += `${words[i]}${separator}`;
  }

  return result;
}

function chooseSeparator(currentIndex, lastIndex) {
  switch (currentIndex) {
    case lastIndex:
      return "";
    case lastIndex - 1:
      return " and ";
    default:
      return ", ";
  }
}
