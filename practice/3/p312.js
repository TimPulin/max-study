/*
Вообще inner join — это оператор SQL (язык для СУБД — систему управления базами данных). 
И иногда в странных компаниях даже у фронтендеров спрашивают, как он работает.

Ваша задача — реализовать аналогичное поведение на джаваскриптовых массивах.

Функция innerJoin(arrLeft, arrRight, keyLeft, keyRight) принимает 4 аргумента: два массива с объектами, которые нужно объединить, 
и названия ключей, по которым нужно объединять.

В результате должен образоваться новый массив, в котором объекты будут состоять из ключей объектов первого массива и ключей объектов второго массива. Два объекта obj1 и obj2 объединяются, если значения obj1[keyLeft] и obj2[keyRight] равны.

На примере понятнее. Объединяем массив пользователей и массив купленных курсво по айдишнику пользователя (в первом массиве это ключ id, во втором — userId).

Пользователь alice купил 2 курса, пользователь bob ничего не купил, у пользователя carol — 1 курс. Итого в ответе три объекта.
*/

function innerJoin(arrLeft, arrRight, keyLeft, keyRight) {
  const result = [];

  for (const itemLeft of arrLeft) {
    const filtered = arrRight
      .values()
      .filter((itemRight) => itemRight[keyRight] === itemLeft[keyLeft])
      .map((itemRight) => ({
        ...itemLeft,
        ...itemRight,
      }));

    result.push(...filtered);
  }

  return result;
}

console.log(
  innerJoin(
    [{ id: 1 }, { id: 2 }],
    [{ clientId: 1 }, { clientId: 2 }],
    "id",
    "clientId"
  )
);
