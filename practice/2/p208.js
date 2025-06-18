const EXCEPT_DIGIT_PATTERN = /[^\d]/;
function onlyDigits(str) {
  // return !EXCEPT_DIGIT_PATTERN.test(str)

  return /^\d+$/.test(str);
}

// bv5367hf743hv43564

// function v2(str) {
//   return Iterator.from(str).every((char) => char >= "0" && char <= "9");
// }
// function v3(str) {
//   // return Array.from(str).every((char) => char >= "0" && char <= "9");
//   return [].every.call(str, (char) => char >= "0" && char <= "9");
// }

const s = new Set("qwerty");

const it = s[Symbol.iterator]();
// it.next()
// it.next()
// it.next()
// it.next()

for (const item of s) {
  console.log(item);
}

console.log(...s);

[...s];

const [a1, b1] = s1;
const { a2, b2 } = s2;

// https://babeljs.io/repl#?browsers=ie%208&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=FAYw9gdgzgLgBAbQIYEYA0cBGKC6cC8cUKA3KJLHAN5IBMGmtAvgUbSUA&forceAllTransforms=false&modules=false&shippedProposals=false&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=env&prettier=true&targets=&version=7.27.0&externalPlugins=&assumptions=%7B%7D

const { state: count, setState: setCount } = useState(1);
const { state, setState } = useState([]);

// const s = "0".repeat(200_000_000);
// console.log(s[0]);

// let word = "qwerty";

// let reversed = "";
// for (let i = word.length - 1; i >= 0; i--) {
//   // reversed += word[i]
//   reversed = reversed + word[i];
// }

// [name1, " ", name2, "!"].join("")

// console.time("iterator");
// console.log(v2(s));
// console.timeEnd("iterator");

// console.time("array");
// console.log(v3(s));
// console.timeEnd("array");

console.log(process.memoryUsage());
