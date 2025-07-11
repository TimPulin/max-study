/*
Реализуйте функцию, сравнивающую два объекта. Гарантируется, что значениями в этих объектах будут только примитивы.
*/

function compareObjects(o1, o2) {
  const o1Keys = Object.keys(o1);
  const o2Keys = Object.keys(o2);

  if (o1Keys.length !== o2Keys.length) return false;

  for (const key of o1Keys) {
    if (!Object.hasOwn(o2, key) || !Object.is(o1[key], o2[key])) return false;
  }

  return true;
}
