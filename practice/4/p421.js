/*
Простое число — натуральное число, у которого ровно 2 делителя. Как определить простоту числа, мы разбирали в задаче is-prime.

Функция primeGenerator возвращает функцию, которая при очередном вызове возвращает следующее простое число.
*/

function primeGenerator() {
  let last = 1;

  return () => {
    // NOTE вместо Infinity можно было поставить 9, но что-то остановило
    for (let i = 1; i < Infinity; i++) {
      if (isPrime(last + i)) {
        last = last + i;
        return last;
      }
    }
  };
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const gen = primeGenerator();
console.log(gen());
console.log(gen());
console.log(gen());
console.log(gen());
console.log(gen());
console.log(gen());
console.log(gen());
console.log(gen());
console.log(gen());
console.log(gen());
