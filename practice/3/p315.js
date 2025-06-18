/*
Ваши коллеги должны определить, будете ли вы работать с ними дальше.

Для этого каждый дает оценку ваше работе по шкале от 0 до 10. После этого вычисляется средняя оценка. 
Если она <= 5, то функция должна вернуть 'Get Out Now!', иначе — 'Nice Work Champ!'.

Средняя оценка вычисляется как сумма всех оценок, разделенная на количество людей. 
Оценка босса (имя босса передается вторым аргументом) важнее остальных, поэтому она удваивается!
*/

const APPROVE_MSG = "Nice Work Champ!";
const REJECT_MS = "Get Out Now!";
const SCORES_FOR_REJECT = 5;

function rating(meet, boss) {
  const meetEntries = Object.entries(meet);

  const totalScores = meetEntries.reduce(
    (sum, [member, scores]) => sum + (member === boss ? scores * 2 : scores),
    0
  );

  const average = totalScores / meetEntries.length;

  return average <= SCORES_FOR_REJECT ? REJECT_MS : APPROVE_MSG;
}

const meet = {
  first: 3,
  second: 5,
};

console.log(rating(meet, "second"));
