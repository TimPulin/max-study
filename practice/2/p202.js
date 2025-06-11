function topWords(words, query, limit) {
  const re = createRegexp(query);
  const result = words
    .values()
    .filter((word) => re.test(word))
    .take(limit)
    .toArray();
  console.log(result);
  return result;
}

function createRegexp(str) {
  return new RegExp(`^${str}.*`, "i");
}
