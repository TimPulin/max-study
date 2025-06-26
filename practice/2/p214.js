/*
Реализуйте функцию, которая принимает произвольное количество слов и объединяет их в одну строку.
*/

// ["A", "B", "C", "D"] → "A, B, C and D"
//                        "A, B, C"

function formatWords(...words) {
  if (words.length === 0) {
    return "";
  }

  if (words.length === 1) {
    return words[0];
  }

  const withoutLast = words.slice(0, -1).join(", ");
  const last = words.at(-1);
  return `${withoutLast} and ${last}`;
}

console.log(formatWords());
console.log(formatWords("A"));
console.log(formatWords("A", "B"));
console.log(formatWords("A", "B", "C"));
console.log(formatWords("A", "B", "C", "D"));

// function formatWords(...words) {
//   let separator = "";
//   let result = "";

//   const lastIndex = words.length - 1;

//   for (let i = 0; i <= lastIndex; i++) {
//     separator = chooseSeparator(i, lastIndex);
//     result += `${words[i]}${separator}`;
//   }

//   return result;
// }

// function chooseSeparator(currentIndex, lastIndex) {
//   switch (currentIndex) {
//     case lastIndex:
//       return "";
//     case lastIndex - 1:
//       return " and ";
//     default:
//       return ", ";
//   }
// }
