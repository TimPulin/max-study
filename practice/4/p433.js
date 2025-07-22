/*
Допустим, нам дана функция с несколькими параметрами. Например, функция генерирующая автомобильный номер.


function plate(letterA, digit1, digit2, digit3, letterB, letterC, code) {
  const number = digit1 + digit2 + digit3;
  return `${letterA} (${number}) ${letterB + letterC} [${code}]`;
}

console.log(plate("A", "1", "2", "3", "B", "C", "78"));
// вернет "A (123) BC [78]"
Функция partial позволяет зафиксировать часть аргументов функции.

Она принимает функцию и произвольное количество аргументов, которые мы указываем заранее. 
А возвращает новую функцию, которая принимает недостающие аргументы и возвращает результат.
*/

function partial(func, ...initialArgs) {
  const presetArgs = initialArgs.slice(0);

  return partiallyApplied;

  function partiallyApplied(...secondArgs) {
    const resultArgs = [];
    const argsIterator = secondArgs[Symbol.iterator]();

    for (const arg of presetArgs) {
      resultArgs.push(
        arg === partial.placeholder ? argsIterator.next().value : arg
      );
    }

    for (const arg of argsIterator) {
      resultArgs.push(arg);
    }
    return func(...resultArgs);
  }
}

partial.placeholder = Symbol("partial-placeholder");
function plate(letterA, digit1, digit2, digit3, letterB, letterC, code) {
  const number = digit1 + digit2 + digit3;
  return `${letterA} (${number}) ${letterB + letterC} [${code}]`;
}

const foo = partial(plate, "A", "1", "2", "3");
// "B", "C", "78"

console.log(foo("B", "C", "78"));
console.log(foo("78"));

// console.log(plate("A", "1", "2", "3", "B", "C", "78"));
// вернет "A (123) BC [78]"
