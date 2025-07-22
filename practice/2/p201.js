// TODO Iterator
// NOTE Почему решение с применением regexp эффективнее, чем с join(' ')
function shortestWord(str) {
  return str
    .matchAll(/[^ ]+/g)
    .map((word) => word.length)
    .reduce((min, item) => Math.min(item, min), Infinity);
}

// https://github.com/tc39/proposal-math-sum?tab=readme-ov-file#iterable-taking-or-variadic

// Math.sumPrecise([1,2,3]) === 6

// [{x: 1}, {x: 2}].reduce((acc, obj) => acc + obj.x, 0);

// [2001, 2010], [2011, 2020], [2021, null]

// console.log(Math.min(...[1, 2, 3]));
// console.log(Math.min(...[1, 3]));
// console.log(Math.min(...[1]));
// console.log(Math.min(...[]));

// console.log(shortestWord("dsad dsssssss ddd kl dddddddddddd"));
// console.log(shortestWord(""));

// const longString = Array(200_000).fill("a").join(" ");
// console.log(shortestWord(longString));

// const longArray = Array(200_000).fill("a");
// const arr2 = [];
// arr2.push(...longArray);

// node --v8-options | grep stack-size
// --stack-size (default size of stack region v8 is allowed to use (in kBytes))
// type: int  default: --stack-size=984

// node --stack-size=3000 p201.js

const arr = Array(5).fill("_");
arr.emptySlots = function () {
  return this.filter((item) => item != "_").length;
};

arr.emptySlots();
