const mapKeys = (f, obj) =>
  Object.entries(obj)
    .map(([k, v]) => ({ [f(k)]: v }))
    .reduce((acc, obj) => Object.assign(acc, obj));

const obj = { a: 1, b: 2, c: 3 };
console.log(mapKeys((n) => n.repeat(2), obj));
// {aa: 1, bb: 2, cc: 3}
