/*
Реализуйте функцию template, которая позволяет шаблонизировать произвольную строку, подставляя в нее значения из словаря.
*/

function template(str, dict) {
  return str.replaceAll(
    /\{(\w+)\}/g,
    (placeholder, key) => dict[key] ?? placeholder
  );
}

console.log(
  template(
    `Купить {size}-комнатную квартиру в городе {city} за {price} млн {test} рублей`,
    { size: 2, city: "Тверь", price: 7 }
  )
);
