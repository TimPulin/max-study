/*
Реализуйте функцию template, которая позволяет шаблонизировать произвольную строку, подставляя в нее значения из словаря.
*/

function template(str, dict) {
  return str.replaceAll(/{(.+?)}/g, (placeholder, key) =>
    Object.hasOwn(dict, key) ? dict[key] : placeholder
  );
}

console.log(
  template(
    `Купить {size}-комнатную квартиру в городе {ГОРОД} за {price} млн {test} рублей`,
    { size: 2, ГОРОД: "Тверь", price: 7 }
  )
);
