/*
На вход функции приходит строка, состоящая из начального баланса и списка покупок. 
В ней могут быть лишние символы (отличные от цифр и букв), а также лишние переносы строк.

Первая непустая строка описывает начальный баланс. Все остальные строки описывают покупки в определенном формате. 
Через пробел идут номер покупки, категория товара и стоимость.

Ваша задача — сформировать строчку с отчетом. 
Для этого в конце каждой строки нужно добавить информацию о балансе после очередной покупки. 
В конце требуется добавить две строки — про общие траты и про среднюю стоимость.

Строки (они же линии — lines) во входной строке, как и в выходной, разделяются символом переноса строки \n. 
Все числа, обозначающие деньги, должны содержать 2 символа после запятой: например, 1234.50.
*/

function balance(book) {
  let result = [];
  let totalExpense = [];
  const cleanedBookArr = cleanBook(book)
    .split("\n")
    .filter((item) => item !== "");
  console.log(cleanedBookArr);

  if (cleanedBookArr.length > 0) {
    const balance = cleanedBookArr[0];
    let currentBalance = Number(balance);

    result.push(formatBalance(currentBalance));

    for (let i = 1; i < cleanedBookArr.length; i++) {
      const [id, category, price] = cleanedBookArr[i].split(" ");
      //   NOTE как лучше назвать эту переменную?
      const priceNumber = Number(price);

      totalExpense.push(priceNumber);
      currentBalance -= priceNumber;

      result.push(
        formatLine({
          id,
          category,
          price: priceNumber,
          balance: currentBalance,
        })
      );
    }
  }
  const footer = formatFooter(totalExpense);
  result.push(footer);

  return result.join("\n");
}

function formatBalance(balance) {
  return `Original Balance: ${formatMoney(balance)}`;
}

function formatFooter(totalExpense) {
  const footer = [];

  const total = totalExpense.reduce((sum, price) => {
    sum += price;
    return sum;
  }, 0);
  const average = total / totalExpense.length;

  footer.push(formatTotalExpense(total));
  footer.push(formatAverageExpense(average));

  return footer.join("\n");
}

function formatTotalExpense(value) {
  return `Total expense ${formatMoney(value)}`;
}

function formatAverageExpense(value) {
  return `Average expense ${formatMoney(value)}`;
}

function formatLine({ id, category, price, balance }) {
  return `${id} ${category} ${formatMoney(price)} Balance ${formatMoney(
    balance
  )}`;
}

function formatMoney(value) {
  return value.toFixed(2);
}

const SPACE_PATTERN = /[ ]{2,}/g;
const LINE_BREAK_PATTERN = /[\r\n]{2,}/g;
const IRREGULAR_SYMBOLS_PATTERN = /[^\d\w\s\.]/g;
function cleanBook(book) {
  return book
    .replace(SPACE_PATTERN, " ")
    .replace(LINE_BREAK_PATTERN, "\n")
    .replace(IRREGULAR_SYMBOLS_PATTERN, "");
}

const input = `1000.00!=

125 Market !=:125.45
126 Hardware =34.95
127 Video! 7.45

128 Book :14.32
129 Gasoline ::16.10
`;

const input2 = "1124\n132 Hardware 17.00\n127 Vegetables;! 17.00?;\n";

console.log(balance(input2));
