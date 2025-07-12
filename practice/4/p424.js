/*
Функция-декоратор once принимает функцию и возвращает новую функцию, которая отрабатывает только один раз.
*/

function once(func) {
  let isDone = false;

  return (...arg) => {
    if (isDone) {
      return undefined;
    }
    isDone = true;
    return func(...arg);
  };
}
