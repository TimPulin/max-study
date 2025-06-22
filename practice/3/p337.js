/*
У каждого студента есть неограниченное количество попыток сдать экзамен. 
На вход мы получаем список попыток всех студентов в виде массива объектов. 
В каждом объекте находится имя студента, количество баллов и дата попытки.

Гарантируется, что баллы — целое число от 0 до 100, а дата — строка в формате DD.MM.YYYY.

Необходимо вернуть массив с такими же объектами, в котором будут собраны лучшие попытки для каждого студента. 
Если студент набрал одинаковое количество баллов в разных попытках, то вернуть нужно ту, которая была раньше.

Объекты в итоговом массиве должны быть отсортированы по именам студентов (по возрастанию).
*/
// FIX не проходит второй тест
function bestResults(attempts) {
  const attemptsByStudent = {};

  for (const { name, score, date } of attempts) {
    const dateStr = transformDateToISOStr(date);
    if (
      !Object.hasOwn(attemptsByStudent, name) ||
      score > attemptsByStudent[name].attempt.score ||
      (score === attemptsByStudent[name].attempt.score &&
        dateStr < attemptsByStudent[name].attempt.dateStr)
    ) {
      attemptsByStudent[name] = { attempt: { name, score, date }, dateStr };
    }
  }

  return Object.values(attemptsByStudent)
    .map((item) => item.attempt)
    .sort((a, b) => a.name.localeCompare(b.name));
}

function transformDateToISOStr(date) {
  const dateList = date.split(".");
  return `${dateList[2]}${dateList[1]}${dateList[0]}`;
}

const attempts = [
  {
    name: "test",
    score: 100,
    date: "01.07.2024",
  },

  {
    name: "test",
    score: 100,
    date: "01.09.2024",
  },
  {
    name: "test",
    score: 100,
    date: "01.08.2024",
  },
  {
    name: "test",
    score: 100,
    date: "01.10.2024",
  },
];

console.log(bestResults(attempts));
