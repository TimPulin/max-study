/*
Строка является анаграммой другой строки, если может быть получена путем перестановки символов в этой строке.

Проверьте, что первая строка является анаграммой второй строки.
*/

function isAnagram(a, b) {
  return useObj(a, b);
}

// NOTE GPT говорит, что это решение эффективнее благодаря отсутствию сортировки, у которой сложность O(n log n)
function useObj(a, b) {
  const charCount = {};
  for (const char of a.toLowerCase()) {
    charCount[char] = (charCount[char] ?? 0) + 1;
  }

  for (const char of b.toLowerCase()) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }

  return Object.values(charCount).every((amount) => amount === 0);
}

function useSort(a, b) {
  if (a.length !== b.length) return false;
  return sortStr(a) === sortStr(b);
}

function sortStr(str) {
  return str
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
}

console.log(isAnagram("addfg", "afddg"));
