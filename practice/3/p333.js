/*
Дан массив студентов. Каждый студент описывается тремя полями: возраст age, средний балл gpa и имя-фамилия fullName.

{
  age: 23, 
  gpa: 88,
  fullName: "Jane Doe",
}
Необходимо отсортировать студентов (критерии в порядке важности):

Средний балл (по убыванию)
Первая буква фамилии (по возрастанию)
Возраст (по возрастанию)
В ответе необходимо вернуть список полных имен.
*/

function sortStudents(students) {
  return students
    .toSorted(sort)
    .map(student => student.fullName)
}

function sort(a, b) {
  if (a.gpa !== b.gpa) {
    return b.gpa - a.gpa
  };

  // NOTE подумал что в данном случае отдельная функция будет уместна, чтобы не повторять код дважды
  const aFirstLetter = getLastNameFirstLetter(a.fullName)
  const bFirstLetter = getLastNameFirstLetter(b.fullName)
  if (aFirstLetter !== bFirstLetter) {
    return aFirstLetter.localeCompare(bFirstLetter);
  }

  return a.age - b.age;
}

function getLastNameFirstLetter(fullName) {
  return fullName.split(' ')[1].at(0);
}
