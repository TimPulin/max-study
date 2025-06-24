/*
Дано положительное целое число — цена товара. 
Верните строку с отформатированной ценой: цифры справа налево должны быть 
сгруппированы по три, а группы отделены друг от друга пробелами.
*/


function formatPrice(price) {
  const strPrice = Array.from(price.toString()).reverse();

  let formatted = '';

  for (let i = 0; i < strPrice.length; i++) {
    formatted = `${strPrice[i]}${getSeparator(i)}${formatted}`
  }
  return formatted;
}


function formatPriceWithoutArr(price) {
  const strPrice = price.toString();

  let formatted = '';

  for (let i = strPrice.length - 1, counter = 0; i >= 0; i--) {
    formatted = `${strPrice[i]}${getSeparator(counter)}${formatted}`
    counter++;
  }

  return formatted;
}

function getSeparator(index) {
  return index % 3 === 0 && index !== 0 ? ' ' : '';
}


// NOTE не проходят тесты хотя отдает правильную строку
const formatter = Intl.NumberFormat('ru');
function formatPriceByIntl(price) {
  return formatter.format(price)
}

console.log(formatPrice(1234567));


