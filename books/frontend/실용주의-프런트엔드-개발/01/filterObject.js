const filterObject = (f, obj) =>
  Object.entries(obj)
    .filter(([_, v]) => f(v))
    .map(([k, v]) => ({
      [k]: v,
    }))
    .reduce((acc, obj) => Object.assign(acc, obj));

const obj = { a: 1, b: 2, c: 3 };
console.log(filterObject((n) => n == 2, obj));
// {b: 2}
