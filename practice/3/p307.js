function template(str, dict) {
  let formattedStr = "";
  let unformattedStr = str;

  let placeholderInfo = searchPlaceholder(str);
  while (placeholderInfo !== null) {
    const value = dict[placeholderInfo.key] ?? `{${placeholderInfo.key}}`;

    const indexSlice = calcIndexSlice(
      placeholderInfo.index,
      String(value).length
    );

    const formatted = formatStr({
      str: unformattedStr,
      key: placeholderInfo.key,
      value,
      index: indexSlice,
    });

    formattedStr += formatted.formatted;

    unformattedStr = formatted.unformatted;
    console.log(value);

    placeholderInfo = searchPlaceholder(unformattedStr);
  }

  formattedStr += unformattedStr;
  return formattedStr;
}

function formatStr({ str, key, value, index }) {
  const replaced = str.replace(`{${key}}`, value);

  return {
    formatted: replaced.slice(0, index),
    unformatted: replaced.slice(index, replaced.length),
  };
}

function calcIndexSlice(index, length) {
  return index + length;
}

const PLACEHOLDER_PATTERN = /\{(.+?)\}/g;
function searchPlaceholder(str) {
  const match = str.matchAll(PLACEHOLDER_PATTERN);

  const transformed = Array.from(match).map((item) => ({
    key: item[1],
    index: item.index,
  }));

  return transformed.length > 0 ? transformed[0] : null;
}

console.log(
  template(
    `Купить {size}-комнатную квартииру в городе {city} за {price} млн рублей`,
    { size: 2, city: "Тверь", price: 7 }
  )
); //  "Купить 2-комнатную квартииру в городе Тверь за 7 млн рублей"
