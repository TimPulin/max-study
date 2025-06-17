function decodeRLE(str) {
  let numberStr = "";
  let result = "";

  for (char of str) {
    if (isDigit(char)) {
      numberStr += char;
    } else {
      const number = getNumber(numberStr);

      result += decode(result.charAt(result.length - 1), number);
      numberStr = "";
      result += char;
    }
  }
  const number = getNumber(numberStr);

  result += decode(result.charAt(result.length - 1), number);
  return result;
}

function isDigit(value) {
  return value >= "0" && value <= "9";
}

function getNumber(numberStr) {
  return numberStr === "" ? 0 : Number(numberStr) - 1;
}

function decode(char, number) {
  return char.repeat(number);
}

console.log(decodeRLE("a10b2"));
