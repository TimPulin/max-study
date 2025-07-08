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

function formatMoney(value) {
  return value.toFixed(2);
}

function balance(book) {
  const [firstLine, ...lines] = book
    .replaceAll(/[^a-z0-9. \n]/gi, "")
    .split("\n")
    .filter((item) => item !== "");

  const originalBalance = Number(firstLine);
  let currentBalance = originalBalance;

  const result = [];

  result.push(`Original Balance: ${formatMoney(currentBalance)}`);

  for (const line of lines) {
    const [id, category, priceStr] = line.split(" ");
    const price = Number(priceStr);

    currentBalance -= price;
    result.push(
      `${id} ${category} ${formatMoney(price)} Balance ${formatMoney(
        currentBalance
      )}`
    );
  }

  const totalExpense = originalBalance - currentBalance;
  const averageExpense = totalExpense / lines.length;

  result.push(`Total expense ${formatMoney(totalExpense)}`);
  result.push(`Average expense ${formatMoney(averageExpense)}`);

  return result.join("\n");
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

console.log(balance(input));
