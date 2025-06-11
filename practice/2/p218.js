function encodeRLE(str) {
  let encodedStr = "";
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    let nextChar = i === str.length - 1 ? null : str[i + 1];
    if (currentChar === nextChar) {
      counter++;
    } else {
      encodedStr += encoder(currentChar, counter);
      counter = 1;
    }
  }
  return encodedStr;
}

function encoder(char, amount) {
  return amount > 1 ? `${char}${amount}` : char;
}
