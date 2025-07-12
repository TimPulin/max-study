/*
Пусть нам даны функции, принимающие один аргумент:
*/

function compose(...funcs) {
  if (funcs.length > 0) {
    return (arg) => {
      let result = arg;
      for (let i = funcs.length - 1; i >= 0; i--) {
        result = funcs[i](result);
      }
      return result;
    };
  }
  return (arg) => {
    return arg;
  };
}
const test = compose();
console.log(test(1));
