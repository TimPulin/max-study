function max(numbers) {
  let maxNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    maxNumber = currentNumber > maxNumber ? currentNumber : maxNumber;
  }

  return maxNumber;
}

function maxOriginal(number) {
  return numbers.reduce((max, number) => Math.max(max, number), -Infinity);
}
