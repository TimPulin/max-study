// TODO Iterator

function searchValue(matrix, min) {
  return useIterator(matrix, min);
}

// NOTE Вариант с Iterator
function useIterator(matrix, min) {
  for (const row of matrix) {
    const rowIterator = row.values();
    for (const word of rowIterator) {
      if (word.length >= min) return true;
    }
  }
  return false;
}

function useFlat(matrix, min) {
  return matrix.flat().some((word) => word.length >= min);
}
