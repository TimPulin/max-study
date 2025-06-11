/*
Во входной строке замените все даты в американском формате MM/DD/YYYY на отечественный формат DD.MM.YYYY.
*/

const DATE_PATTERN = /\d{2}\/\d{2}\/\d{4}/g

function changeDateFormat(str) {
  
  return str.replaceAll(DATE_PATTERN, formatDate)
  
}

function formatDate(str) {
    const [month, day, year]= str.split('/');
    return `${day}.${month}.${year}`;
}



console.log(changeDateFormat('dadf 12/26/1998'));
