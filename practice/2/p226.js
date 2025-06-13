/*
IP-адрес состоит из четырех чисел от 0 до 255, разделенных точками.

Определите, является ли строка корректным IP-адресом.
*/

function isValidIP(str) {
  const apiList = str.split(".");
  if (apiList.length !== 4) return false;

  return apiList.every(
    (item) => isValidDigit(item) && isValidRange(Number(item))
  );
}

// NOTE как другим способом проверить, что строка не является, как пример, "01"
function isValidDigit(str) {
  return str === String(Number(str));
}

function isValidRange(number) {
  return number >= 0 && number <= 255;
}
