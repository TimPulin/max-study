/*
Анализатор кода для каждого класса посчитал, сколько раз каждый его 
метод используется в проекте. Результат доступен в виде массива объектов.

Реализуйте функцию topMethods(stats, limit), которая 
возвращает не более limit самых популярных методов в проекте, отсортированных по убыванию популярности.

Так как у разных классов методы могут называться одинаково, в ответе 
методы должны быть записаны в формате Class#method, например, "Array#splice" или "String#replace".

Если два метода встречаются одинаковое количество раз, то между собой их 
необходимо отсортировать по полному названию. Например, "Array#splice" идет раньше "String#replace" .

В ответе всегда должно быть не более limit методов. Если в проекте несколько 
методов с одинаковым количеством использований они или все попадают в ответ, или все не попадают.


  {
    class: "Object",
    methods: [
      { name: "toString", count: 5 },
      { name: "hasOwnProperty", count: 6 },
    ],
  },
*/

function topMethods(stats, limit) {
  const methodsRating = {};

  for (const { class: className, methods } of stats) {
    for (const { name, count } of methods) {
      if (!methodsRating[count]) {
        methodsRating[count] = [];
      }
      methodsRating[count].push(`${className}#${name}`);
    }
  }
  const sortedMethodsRating = Object.entries(methodsRating).sort(
    ([a], [b]) => Number(b) - Number(a)
  );

  let totalMethodsAmount = 0;
  const popularMethods = [];
  for (const [_, methods] of sortedMethodsRating) {
    const methodsAmount = methods.length;

    if (totalMethodsAmount + methodsAmount > limit) {
      break;
    }

    totalMethodsAmount += methodsAmount;
    methods.sort((a, b) => a.localeCompare(b));
    popularMethods.push(...methods);
  }

  return popularMethods;
}

const stats = [
  {
    class: "Object",
    methods: [
      { name: "toString", count: 5 },
      { name: "hasOwnProperty", count: 6 },
    ],
  },
  {
    class: "BArray",
    methods: [
      { name: "filter", count: 17 },
      { name: "splice", count: 5 },
      { name: "map", count: 25 },
    ],
  },
  {
    class: "Array",
    methods: [
      { name: "filter", count: 17 },
      { name: "splice", count: 5 },
      { name: "map", count: 25 },
    ],
  },
  {
    class: "String",
    methods: [
      { name: "replace", count: 12 },
      { name: "slice", count: 8 },
    ],
  },
];

console.log(topMethods(stats, 4));

const output = ["Array#map", "Array#filter", "String#replace", "String#slice"];
