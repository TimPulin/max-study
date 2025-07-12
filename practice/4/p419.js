/*
Функция repeatGenerator принимает строку и возвращает функцию, 
которая при очередном вызове возвращает очередной символ из этой строки.

Когда символы заканчиваются, она начинает возвращать символы сначала.
*/

function repeatGenerator(str) {
  let iterator = createIterator(str ?? ""); // NOTE иначе не проходил первый тест

  return () => {
    let next = iterator.next();

    if (next.done) {
      iterator = createIterator(str);
      next = iterator.next();
    }
    return next.value;
  };
}

function createIterator(data) {
  return data[Symbol.iterator]();
}

const iter = repeatGenerator("12344");
console.log(iter());
console.log(iter());
console.log(iter());
console.log(iter());
console.log(iter());
console.log(iter());
console.log(iter());
console.log(iter());
