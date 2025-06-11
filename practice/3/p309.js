function parseCsv(csv) {
  const [headersRow, ...dataRow] = csv.split('\n');

  const headers = headersRow.split(';');

  return dataRow.map((line) => {
    const obj = {};
    const values = line.split(';');

    for (let i = 0; i < values.length; i++) {
      obj[headers[i]] = values[i];
    }

    return obj;
  })
}
