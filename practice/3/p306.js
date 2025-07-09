function keysProjection(objects, keys) {
  return objects.map((obj) => copyProperties(obj, keys));
}

function copyProperties(obj, keys) {
  return Object.fromEntries(keys.values().map((key) => [key, obj[key]]));
}

// console.log(Object(5));
// console.log(Object(5) instanceof Number);
// console.log(new Number(5));

// Array(8,9,0) → [8,9,0]
// Array(true) → [true]
// Array(3) → [<empty item>, <empty item>, <empty item>]
// Array.of(3) → [3]
// Array.of(9, 5) → [9, 5]

// Object.fromEntries
// Map

Object.fromEntries(new Map());

// Array.from
// Set

new Array(new Set());
