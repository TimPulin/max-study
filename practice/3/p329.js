/*
Дано два непустых массива чисел одинаковой длины. Элементы, стоящие на соответствующих местах, образуют пары. 
Для каждой пары можно посчитать сумму элементов пары.

Необходимо определить, какая сумма встречается чаще всего и вернуть пары, которые дают такую сумму. 
Если таких сумм несколько, выбрать нужно ту, которая больше.
*/

function mostFrequentSum(a1, a2) {
  const sumMap = new Map();

  for (let i = 0; i < a1.length; i++) {
    const term1 = a1[i];
    const term2 = a2[i];
    const sum = term1 + term2;
    if (!sumMap.has(sum)) {
      sumMap.set(sum, [])
    }
    sumMap.get(sum).push([term1, term2]);
  }

  let maxSum = -Infinity;
  let maxFrequence = 0;
  for (const [sum, pairs] of sumMap) {
    if (pairs.length > maxFrequence) {
      maxFrequence = pairs.length;
      maxSum = sum;
    } else if (pairs.length === maxFrequence && sum > maxSum) {
      maxSum = sum;
    }
  }
  
  return sumMap.get(maxSum);
}

arr1 = [891,1417,767,1124,-255,319,844,1359,1429,1540]
arr2 = [-55,1492,69,-288,1091,1075,550,263,-35,-146]
console.log(mostFrequentSum(
  arr1,
  arr2,
));
