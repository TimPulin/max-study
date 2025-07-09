/*
IP-адрес состоит из четырех чисел от 0 до 255, разделенных точками.

Определите, является ли строка корректным IP-адресом.
*/

function isValidIP(str) {
  const octets = str.split(".");

  return octets.length === 4 && octets.every(isValidOctet);
}

function isValidOctet(str) {
  if (!/^\d+$/.test(str)) {
    return false;
  }

  if (str.startsWith("0") && str !== "0") {
    return false;
  }

  return Number(str) <= 255;
}

// function isValidOctet(str) {
//   const number = Number(str);
//   // NOTE как другим способом проверить, что строка не является, как пример, "01"
//   return str === String(number) && number >= 0 && number <= 255;
// }
