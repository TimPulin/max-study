/*
IP-адрес состоит из четырех чисел от 0 до 255, разделенных точками.

Определите, является ли строка корректным IP-адресом.
*/

function isValidIP(str) {
  const apiList = str.split(".");
  if (apiList.length !== 4) return false;

  return apiList.every(
    (item) => {
      const number = Number(item);
      // NOTE как другим способом проверить, что строка не является, как пример, "01"
      return item === String(number) && number >= 0 && number <= 255
    }
  );
}



