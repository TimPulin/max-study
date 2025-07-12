/*
У каждого студента есть неограниченное количество попыток сдать экзамен. 
На вход мы получаем список попыток всех студентов в виде массива объектов. 
В каждом объекте находится имя студента, количество баллов и дата попытки.

Гарантируется, что баллы — целое число от 0 до 100, а дата — строка в формате DD.MM.YYYY.

Необходимо вернуть массив с такими же объектами, в котором будут собраны лучшие попытки для каждого студента. 
Если студент набрал одинаковое количество баллов в разных попытках, то вернуть нужно ту, которая была раньше.

Объекты в итоговом массиве должны быть отсортированы по именам студентов (по возрастанию).
*/

function bestResults(attempts) {
  const attemptsByStudent = {};

  for (const { name, score, date } of attempts) {
    if (
      !Object.hasOwn(attemptsByStudent, name) ||
      score > attemptsByStudent[name].score ||
      (score === attemptsByStudent[name].score &&
        transformDateToISOStr(date) <
          transformDateToISOStr(attemptsByStudent[name].date))
    ) {
      attemptsByStudent[name] = { name, score, date };
    }
  }

  return Object.values(attemptsByStudent).sort((a, b) =>
    a.name.localeCompare(b.name)
  );
}

function transformDateToISOStr(date) {
  const [day, month, year] = date.split(".");
  return `${year}${month}${day}`;
}

const attempts = [
  {
    name: "test",
    score: 100,
    date: "01.06.2024",
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
