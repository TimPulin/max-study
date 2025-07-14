/*
Реализуйте функцию join, которая будет работать следующим образом:


const s = join("Hello")("World!")("how")("are")("you?")();
console.log(s); // "Hello World! how are you?"
Цепочка может состоять из произвольного количества вызовов.

Каждый вызов, кроме последнего, принимает в качестве аргумента одну строку. Последний вызов не принимает аргументы и возвращает итоговую строку.
*/

function join(initial) {
  let result = initial;

  function chain(str) {
    if (str) {
      result += ` ${str}`;
      return chain;
    }
    return result;
  }

  return chain;
}

const test = join("s")("d")();
