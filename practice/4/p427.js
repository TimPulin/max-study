/*
Джаваскрипт позволяет передать в функцию любое количество аргументов, независимо от того, сколько их было при объявлении функции.

Реализуйте декоратор withArgsValidation, который позволяет проверять, что в функцию передано нужное количество аргументов.
*/

function withArgsValidation(fn) {
  return (...args) => {
    if (args.length != fn.length) {
      throw new Error("Invalid number of arguments");
    }
    return fn(...args);
  };
}
