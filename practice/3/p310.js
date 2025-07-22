/*
CSV (Comma-separated values) — популярный формат, описывающий таблицы с текстовыми данными (см. википедию).

В первой строке через символ ; записаны заголовки, а во всех остальных — их значения. 
Строки, как обычно, разделяются символом переноса строки — \n.

Ваша задача — преобразовать строку в форате CSV в массив объектов. Гарантируется, что входные данные всегда корректные: 
всегда есть строка с заголовком, количество столбцов каждой строке одинаковое, нет лишних символов переноса строки.
*/

function parseCsv(csv) {
  const [headersRow, ...dataRow] = csv.split("\n");

  const headers = headersRow.split(";");

  return dataRow.values().map((line) => {
    const values = line.split(";");

    // const obj = {};
    // for (let i = 0; i < values.length; i++) {
    //   obj[headers[i]] = values[i];
    // }
    // return obj;

    return Object.fromEntries(
      headersRow.map((_, i) => [headers[i], values[i]])
    );
  });
}
