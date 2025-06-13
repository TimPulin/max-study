/*
Increment (инкремент) — операция увеличения, чаще всего на 1. 
Например, вам должна быть знакома операция x++ (increment).

Реализуйте функцию incrementString, которая увеличивает число в конце строки на 1.
*/

function incrementString(str) {
  return useCycle(str);
}

function useCycle(str) {
  let digits = [];
  for (let i = str.length - 1; i >= 0; i--) {
    const currentChar = str[i];
    if (isDigit(currentChar)) {
      digits.push(Number(currentChar));
    } else {
      return `${str.slice(0, i + 1)}${increase(extractDigit(digits))}`;
    }
  }
  return `${increase(extractDigit(digits))}`;
}
function extractDigit(digits) {
  return digits.length > 0 ? digits.reverse().join("") : "0";
}

function useRegexp(str) {
  const { digits, str: cleanedStr } = trimEndDigits(str);
  return `${cleanedStr}${increase(digits)}`;
}
const DIGITS_PATTERN = /[\d]+$/;
function trimEndDigits(str) {
  const match = str.match(DIGITS_PATTERN);
  const digits = match ? match[0] : 0;
  const cleanedStr = match ? str.slice(0, match.index) : str;

  return {
    digits,
    str: cleanedStr,
  };
}

function isDigit(str) {
  return str >= "0" && str <= "9";
}

function increase(str) {
  return (Number(str) + 1).toString().padStart(str.length, "0");
}
