// TODO переделать в один цикл
function decodeRLE(str) {
  let decodedStr = "";
  let i = 0;

  while (i < str.length) {
    const currentChar = str[i];

    i++;
    const { digit, index } = searchDigit(str, i);
    decodedStr += decode(currentChar, digit);
    i = index;
  }

  return decodedStr;
}

const x = " ";
// console.log(!Number.isNaN(Number(x)));

["gyu", "srea", "awsvbyu", "abjvcr"].sort();
x >= "0" && x <= "9";
// "awsvbyu" < "abjvcr"

// a.localeCompare(b)

// https://maxcode.dev/cheatsheets/ascii/

const DIGIT_PATTERN = /\d/;
function searchDigit(str, index) {
  let digitStr = "";
  let i = index;
  while (DIGIT_PATTERN.test(str[i])) {
    digitStr += str[i];
    i++;
  }

  return {
    digit: digitStr > 0 ? Number(digitStr) : 1,
    index: i,
  };
}

function decode(char, amount) {
  return char.repeat(amount);
}

console.log(decodeRLE("abc11"));
