/*
Функция updateShoppingCart позволяет увеличить или уменьшить количество какого-то товара в корзине. Она принимает три аргумента:

shoppingCart — объект с текущим набором продуктов (ключ — название продукта, значение — количество, целое положительное число);
operation — строка с типом операции: "add" или "remove";
product — название добавляемого товара (это может быть товар из корзины или какой-то новый).
Вернуть нужно новый объект, в котором количество соответствующего продукта изменено. Исходный объект мутировать нельзя.
*/

const ADD = "add";
const REMOVE = "remove";

const operationValues = {
  [ADD]: 1,
  [REMOVE]: -1,
};

function updateShoppingCart(shoppingCart, operation, product) {
  const newCart = { ...shoppingCart };

  const productAmount = (newCart[product] ?? 0) + operationValues[operation];

  productAmount <= 0
    ? delete newCart[product]
    : (newCart[product] = productAmount);

  return newCart;
}
