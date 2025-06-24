function countSmileys(arr) {
  return countByFilter(arr);
}


function countByFilter(arr) {
  return arr.filter(isSmile).length;
}

function countByReduce(arr) {
    return arr.reduce((counter, str) => {
    if (isSmile(str)) counter++;
    return counter;
  }, 0);
}

const SMILE_PATTERN = /^[:;][-~]?[)D]$/;
function isSmile(str) {
  return SMILE_PATTERN.test(str);
}

console.log(countSmileys([":0", ";-)", ":~D"]));
