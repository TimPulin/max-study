/*
Реализуйте функцию, которая позволяет склонять существительное во множественном числе.

Например, 1 корова, 2 коровы, 5 коров, 24 коровы, 51 корова. Или 2 задачи, 70 задач и 21 задача.
*/

function plural(words) {
  const [single, plural, plenty] = words;

  return (number) => {
    const numberStr = String(number);

    const lastTwoDigits = Number(numberStr.slice(-2));
    const lastDigit = Number(numberStr.slice(-1));

    if (
      (lastTwoDigits >= 11 && lastTwoDigits <= 14) ||
      lastDigit === 0 ||
      lastDigit >= 5
    ) {
      return plenty;
    }

    if (lastDigit === 1) {
      return single;
    }

    return plural;
  };
}
