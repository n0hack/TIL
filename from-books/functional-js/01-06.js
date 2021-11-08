// 리팩토링의 핵심은 중복을 제거하고 의도를 드러내는 것
console.clear();
const log = console.log;

// 좀 더 실용적인 예시
var users = [
  { id: 1, name: "ID", age: 32 },
  { id: 2, name: "HA", age: 25 },
  { id: 3, name: "BJ", age: 32 },
  { id: 4, name: "PJ", age: 28 },
  { id: 5, name: "JE", age: 27 },
  { id: 6, name: "JM", age: 32 },
  { id: 7, name: "HI", age: 24 },
];

function filter(list, predicate) {
  var newList = [];
  for (const a of list) {
    if (predicate(a)) newList.push(a);
  }
  return newList;
}

function map(list, iteratee) {
  var newList = [];
  for (const a of list) {
    newList.push(iteratee(a));
  }
  return newList;
}

// 길이를 출력하고 값을 반환
function logLength(value) {
  console.log(value.length);
  return value;
}

function bValue(key) {
  return function (obj) {
    return obj[key];
  };
}

// prettier-ignore
console.log(logLength(map(filter(users, u => u.age < 30), u => u.age)));
// prettier-ignore
console.log(logLength(map(filter(users, u => u.age >= 30), u => u.name)));

console.log("\n");

var under30 = (u) => u.age < 30;
var over30 = (u) => u.age >= 30;
// prettier-ignore
console.log(logLength(map(filter(users, under30), u => u.age)));
// prettier-ignore
console.log(logLength(map(filter(users, over30), u => u.name)));

console.log("\n");

var ages = (list) => map(list, (v) => v.age);
var names = (list) => map(list, (v) => v.name);
// prettier-ignore
console.log(logLength(ages(filter(users, under30))));
// prettier-ignore
console.log(logLength(names(filter(users, over30))));

console.log("\n");

var bValues = (key) => (list) => map(list, (v) => v[key]);
var ages = bValues("age");
var names = bValues("name");

console.log(logLength(ages(filter(users, under30))));
console.log(logLength(names(filter(users, over30))));
