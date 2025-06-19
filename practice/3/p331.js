/*
Вам дан объект, содержащий языки и результаты теста для каждого языка.

Верните список языков с результатами не ниже 60 баллов, отсортированных по убыванию результата.

Если по нескольким языкам набрано одинаковое количество баллов, 
между собой они должны быть отсортированы в лексикографическом порядке (по алфавиту по возрастанию).
*/


/*
Record<string, number>
*/
function myLanguages(results) {
  return Object.entries(results)
  .filter(([_, scores]) => Number(scores) >= 60)
  .sort(([key1, scores1], [key2, scores2]) =>   {
    // NOTE кажется, что так правильнее, но не гибко
    // return scores1 !== scores2 ? scores2 - scores1 : key1.localeCompare(key2)
    return scores2 - scores1 - key1.localeCompare(key2)
  })
  .map(([key]) => key)
}


const results = {
  b: 70,
  a: 70,
  d: 60,
  c: 80,
  
}

console.log(myLanguages(results));
