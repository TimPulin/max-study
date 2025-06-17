/*
Замените в предложении все слова, обозначающие цифры, на цифры.
*/

const digits = {
  nil: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function replaceDigits(str) {
  return str
    .split(" ")
    .map((item) => {
      const itemLowerCase = item.toLowerCase();
      return Object.hasOwn(digits, itemLowerCase)
        ? digits[itemLowerCase]
        : item;
    })
    .join(" ");
}

console.log(replaceDigits("one of us took bus"));
