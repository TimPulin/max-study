/*
Назовем скобочной последовательностью строку, состоящую из символов ()[]<>{}. 
Гарантируется, что в этой задаче в функцию передаются только такие строки.

Правильная скобочная последовательность (ПСП) формально определяется так:

Пустая строка является ПСП.
Если строка s является ПСП, то строки (s), <s>, {s}, [s] тоже являются ПСП. 
Например, <()[]>{} — ПСП, значит [<()[]>{}] — тоже ПСП

Если строка s является ПСП и строка t тоже является ПСП, то строка st — ПСП. 
Например, ()[] и {{}[]} — ПСП. Тогда ()[]{{}[]} — тоже ПСП.

На более простом языке, ПСП — это строка, в которой на каждую открывающуюся скобочку есть соответствующая закрывающая скобочка.

Реализуйте функцию isValidBrackets, которая принимает строку и определяет, является она ПСП.
*/

const OPEN_BRACKETS = ["(", "[", "{", "<"];
const CLOSE_BRACKETS = [")", "]", "}", ">"];
const bracketOppositePair = {
  "(": ")",
  "[": "]",
  "{": "}",
  "<": ">",

  getPair(key) {
    return this[key] ?? "";
  },
};

function isValidBrackets(str) {
  const stack = createStack();
  for (const char of str) {
    if (OPEN_BRACKETS.includes(char)) {
      stack.push(char);
    } else if (CLOSE_BRACKETS.includes(char)) {
      if (char === bracketOppositePair.getPair(stack.getCurrentOpenBracket())) {
        stack.remove();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

function createStack() {
  const stack = [];
  stack.getCurrentOpenBracket = function () {
    return this[this.length - 1];
  };
  stack.remove = function () {
    this.pop(this.length - 1);
  };

  return stack;
}

console.log(isValidBrackets("([{}])"));
