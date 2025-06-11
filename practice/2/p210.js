function smallEnough(numbers, limit) {
  validateInput(numbers, limit);
  return numbers.every(number => number <= limit);
}

function validateInput(numbers, limit) {
  if(!isArrayOfNumbers(numbers)) throw new Error(`Expect array of number, got numbers: ${numbers}`);
  if (!isNumber(limit)) throw new Error(`Expect limit as number, got ${limit}`);
}

function isArrayOfNumbers(numbers) {
  return (
    Array.isArray(numbers) &&
    numbers.length > 0 &&
    numbers.every(number => isNumber(number))
  )
}

function isNumber(value) {
  return typeof value === 'number'
}