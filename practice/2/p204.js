// TODO Iterator

function searchValue(matrix, min) {
  return matrix.flat().some((word) => word.length >= min);
}
