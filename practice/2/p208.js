const EXCEPT_DIGIT_PATTERN = /[^\d]/;
function onlyDigits(str) {
  return !EXCEPT_DIGIT_PATTERN.test(str)
}

function v2(str) {
  return Iterator.from(str).every(char => char >= '0' && char <= '9')
}


