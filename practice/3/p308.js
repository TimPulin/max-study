/*
Напишите функцию, которая трансформирует цвет в формате hex в цвет в формате rgb.
*/

function hex2rgb(str) {
  const cleanedStr = str.replace("#", "");
  const hexParts = [];

  for (let i = 0; i < cleanedStr.length; i += 2) {
    const part = cleanedStr.slice(i, i + 2);
    hexParts.push(part);
  }

  //   NOTE values() не применял по причине ограниченного количества элементов
  const [r, g, b] = hexParts.map((part) => parseInt(part, 16), {});

  return {
    r,
    g,
    b,
  };
}

console.log(hex2rgb("#001122"));
