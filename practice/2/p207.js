function pivotIndex(arr) {
  if (Array.isArray(arr) || arr.some((item) => typeof item !== "number"))
    throw new Error(`Expect array of numbers, got ${arr}`);

  const total = arr.reduce((acc, item) => acc + item, 0);
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (total - arr[i] - leftSum === leftSum) return i;
    leftSum += arr[i];
  }

  return -1;
}

pivotIndex([1, 2, 3, 4, 3, 2, 1]);
