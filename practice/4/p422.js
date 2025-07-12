/*
Функция multiPredicate принимает набор функций-предикатов и 
возвращает новую функцию, которая проверяет, что аргумент удовлетворяет всем предикатам.
*/

function multiPredicate(...predicates) {
  return (value) => {
    for (const predicate of predicates) {
      if (!predicate(value)) {
        return false;
      }
    }
    return true;
  };
}
