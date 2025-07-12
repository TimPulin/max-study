/*

Допустим, у нас есть чистая функция double, принимающая число и умножающая его на два. Но работает она долго.
*/

function memo(fn) {
  const cash = new Map();

  return (arg) => {
    const key = getHash(arg);
    if (!cash.has(key)) {
      cash.set(key, fn(arg));
    }
    return cash.get(key);
  };
}

function getHash(arg) {
  const type = typeof arg;
  const base =
    typeof arg === "object" && arg !== null ? JSON.stringify(arg) : arg;

  return `${type}_${base}`;
}

const test = memo((value) => value * 2);
