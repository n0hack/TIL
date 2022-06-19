const mapValues = (obj, f) =>
  Object.entries(obj)
    .map(([k, v]) => ({ [k]: f(v) }))
    .reduce((acc, obj) => Object.assign(acc, obj));

const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  obj[key] = obj[key] + 10;
}
console.log(obj);

const obj2 = { a: 1, b: 2, c: 3 };
console.log(mapValues(obj2, (n) => n + 10));
