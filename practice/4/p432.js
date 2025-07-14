/*
Реализуйте функцию sum, которая будет работать следующим образом:


console.log(sum(1)(2)(3)(4) == 10);
console.log(sum(5)(5)(5) == 15);
Цепочка может состоять из произвольного количества вызовов.
*/
function sum(initialValue) {
  let total = initialValue;

  function adder(nextValue) {
    total += nextValue;
    return adder;
  }

  adder.valueOf = function () {
    return total;
  };

  adder.toString = function () {
    return total.toString();
  };

  return adder;
}

// Проверка
const foo = sum(2)(4)(6); // 12
console.log(foo(100)(200)(300) == 612); // true
console.log(foo(2000)(5000) == 7012); // true
