function filterHomogenous(arrays) {
  if (!isValidInput(arrays)) throw new Error(`Expect array of arrays, got ${arrays}`);
  
  return arrays.filter(arr => !isArrEmpty(arr) && isHomogenous(arr))
}

function isValidInput(arrays) {
  return (
    Array.isArray(arrays) &&
    arrays.every(arr => Array.isArray(arr))
  );
}

function isArrEmpty(arr) {
  return arr.length === 0;
}

function isHomogenous(arr) {
  const arrType = typeof arr[0];
  return arr.every(item => typeof item === arrType);
}
