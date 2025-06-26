/*
В этой задаче необходимо посчитать, сколько баллов набирает студент на экзамене. 
Экзамен представляет из себя список вопросов с ответами в виде строк. 
Студент может вписать свой ответ или оставить строку пустой.

Функция checkExam принимает два массива одинаковой длины: массив с правильными ответами и массив с ответами студента.

Посчитайте результаты экзамена, если:

правильный ответ дает +4 балла;
отсутствие ответа (пустая строка) дает 0 баллов;
неправильный ответ дает -1 балл.

Получить за экзамен меньше 0 баллов нельзя. Например, если студент неправильно ответил на все вопросы, это все равно 0 баллов.
*/

function checkExam(correctAnswers, studentAnswers) {
  let scores = 0;
  for (let i = 0; i < studentAnswers.length; i++) {
    scores += getScore(correctAnswers[i], studentAnswers[i]);
  }

  for (let i = 0; i < studentAnswers.length; i++) {
    if (studentAnswers[i] === "") continue;
    scores +=
      studentAnswers[i] === correctAnswers[i] ? SCORE.correct : SCORE.wrong;
  }

  return scores < 0 ? 0 : scores;
}

const SCORE = {
  correct: 4,
  empty: 0,
  wrong: -1,
};

function getScore(correctAnswer, answer) {
  if (answer === "") return SCORE.empty;
  return answer === correctAnswer ? SCORE.correct : SCORE.wrong;
}
