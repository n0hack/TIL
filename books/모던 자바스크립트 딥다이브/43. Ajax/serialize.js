const obj = {
  name: 'Jihun',
  age: 29,
  alive: true,
  hobby: ['traveling', 'tennis'],
};

const filter = (_, value) => (typeof value === 'number' ? undefined : value);

const json = JSON.stringify(obj, filter, 2);
console.log(json);

console.log(JSON.parse(json));
