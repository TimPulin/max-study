function keysProjection(objects, keys) {
  return objects.map((obj) => copyProperties(obj, keys));
}

function copyProperties(obj, keys) {
  return Object.fromEntries(keys.map((key) => [key, obj[key]]));
}
