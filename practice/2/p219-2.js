function decodeRLE(str) {
  let result = "";

  let numberStr = "";
  let letter = "";

  for (const char of str) {
    if (isDigit(char)) {
      numberStr += char;
    } else {
      const number = getNumber(numberStr);

      result += decode(letter, number);
      numberStr = "";
      letter = char;
    }
  }
  const number = getNumber(numberStr);

  result += decode(letter, number);
  return result;
}

function isDigit(value) {
  return value >= "0" && value <= "9";
}

function getNumber(numberStr) {
  return numberStr === "" ? 1 : Number(numberStr);
}

function decode(char, number) {
  return char.repeat(number);
}

console.log(decodeRLE("a10b2"));
