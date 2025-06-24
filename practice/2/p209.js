function filterHomogenous(arrays) {

  return arrays.filter((arr) => arr.length !== 0 && isHomogenous(arr));
}


function isHomogenous(arr) {
  const arrType = typeof arr[0];
  return arr.every((item) => typeof item === arrType);
}
