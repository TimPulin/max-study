/*
Дано положительное целое число — цена товара. 
Верните строку с отформатированной ценой: цифры справа налево должны быть 
сгруппированы по три, а группы отделены друг от друга пробелами.
*/


function formatPrice(price) {
  let formatted = '';
  const strPrice = Array.from(price.toString()).reverse();

  for (let i = 0; i < strPrice.length; i++) {
    const separator = i % 3 === 0 && i !== 0 ? ' ' : '';
    formatted = `${strPrice[i]}${separator}${formatted}`
  }
  return formatted;
}


function formatPriceWithoutArr(price) {
  const strPrice = price.toString();

  let formatted = '';

  for (let i = strPrice.length - 1, counter = 0; i >= 0; i--) {
    
    const separator = counter % 3 === 0 && counter !== 0 ? ' ' : '';
    formatted = `${strPrice[i]}${separator}${formatted}`

    counter++;
  }

  return formatted;
}



// NOTE не проходят тесты
const formatter = Intl.NumberFormat('ru');
function formatPriceByIntl(price) {
  return formatter.format(price)
}

console.log(formatPrice(1234567));


