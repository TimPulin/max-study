/*
Реализуйте функцию-декоратор, которая будет превращать функцию с обычными аргументами в функцию, принимающую объект.
*/

function withNamedArgs(fn) {
  return (argsObj) => {
    const paramsNames = parseArgs(fn.toString());
    const args = paramsNames.map((name) => argsObj[name]);

    return fn(...args);
  };
}

function parseArgs(str) {
  const match = str.replaceAll(/[\n\s]/g, "").match(/\((.*)\)/);
  if (match) {
    return match[1].split(",");
  }
  return [];
}

// prettier-ignore
function foo2(
    one, 
    two
) {
  return [one, two];
}

console.log(parseArgs(foo2.toString()));
