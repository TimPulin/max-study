/*
Дано положительное целое число — цена товара. 
Верните строку с отформатированной ценой: цифры справа налево должны быть 
сгруппированы по три, а группы отделены друг от друга пробелами.
*/

function formatPrice(price) {
  const strPrice = Array.from(price.toString()).reverse();

  let formatted = "";

  for (let i = 0; i < strPrice.length; i++) {
    formatted = `${strPrice[i]}${getSeparator(i)}${formatted}`;
  }
  return formatted;
}

// new Int32Array(10)

// /https://en.wikipedia.org/wiki/Scientific_notation
// ± mantissa exponent

// 4321.768 = 4.321768 × 10³

// 12.646528746524598464
// 12.646528746524599

// 1230000000000000000000000000000000000000000000000000000000000
// 1.23e+60

// 9007199254740991
// console.log(Number.MAX_SAFE_INTEGER * 2 + 1);
// console.log(Number.MAX_SAFE_INTEGER * 2 + 2);
// console.log(Number.MAX_SAFE_INTEGER * 2 + 3);
// console.log(Number.MAX_SAFE_INTEGER * 2 + 4);
// console.log(Number.MAX_SAFE_INTEGER * 2 + 5);

function formatPriceWithoutArr(price) {
  const strPrice = price.toString();

  let formatted = "";

  for (let i = strPrice.length - 1, counter = 0; i >= 0; i--) {
    formatted = `${strPrice[i]}${getSeparator(counter)}${formatted}`;
    counter++;
  }

  return formatted;
}

function getSeparator(index) {
  return index % 3 === 0 && index !== 0 ? " " : "";
}

// NOTE не проходят тесты хотя отдает правильную строку
const formatter = Intl.NumberFormat("ru");
function formatPriceByIntl(price) {
  return formatter.format(price).replaceAll(/\s/g, " ");
}
console.log(" ", " "); // &nbsp;
console.log(formatPrice(1234567));
