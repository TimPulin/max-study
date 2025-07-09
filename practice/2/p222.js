/*
Для того, чтобы email не попадал в спам-рассылки, иногда применяют обфускацию — процесс изменения текста, 
чтобы его было сложнее прочитать (в данном случае роботу, сканирующему интернет).

Ваша задача — реализовать функцию obfuscate, которая принимает строку с email и заменяет в нем символ . на [dot], 
а символ @ на [at]. Вокруг квадратных скобок добавляются пробелы.
*/

function obfuscate(email) {
  return obfuscateByCycle(email);
}

function obfuscateByRegexp(email) {
  return email.replace("@", " [at] ").replaceAll(".", " [dot] ");
}

function obfuscateByCycle(email) {
  const result = [];

  for (const char of email) {
    let currentChar = char;
    if (char === ".") {
      currentChar = " [dot] ";
    } else if (char === "@") {
      currentChar = " [at] ";
    }
    result.push(currentChar);
  }

  return result.join("");
}
