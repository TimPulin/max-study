function countSmileys(arr) {
  // return arr.reduce((counter, str) => {
  //   if (isSmile(str)) counter++;
  //   return counter;
  // }, 0);
  return arr.filter(isSmile).length;
}

["3245", "87978", "5647"].map(Number);

const SMILE_PATTERN = /^[:;][-~]?[)D]$/;
function isSmile(str) {
  return SMILE_PATTERN.test(str);
}

console.log(countSmileys([":0", ";-)", ":~D"]));
