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
    if (currentChar >= "0" && currentChar <= "9") {
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
  return str.replace(/\d*$/, (str) =>
    (Number(str) + 1).toString().padStart(str.length, "0")
  );
}

console.log(useRegexp("dadddf023"));
console.log(useRegexp("dadddf"));

const DIGITS_PATTERN = /\d+$/;
function trimEndDigits(str) {
  const match = str.match(DIGITS_PATTERN);
  const digits = match ? match[0] : 0;
  const cleanedStr = match ? str.slice(0, match.index) : str;

  return {
    digits,
    cleanedStr,
  };
}

function increase(str) {
  return (Number(str) + 1).toString().padStart(str.length, "0");
}
