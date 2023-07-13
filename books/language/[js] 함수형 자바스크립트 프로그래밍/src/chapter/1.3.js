function User(id, name, age) {
  this.getId = () => id;
  this.getName = () => name;
  this.getAge = () => age;
}

var users = [
  { id: 1, name: 'ID', age: 32 },
  { id: 2, name: 'HA', age: 25 },
  { id: 3, name: 'BJ', age: 32 },
  { id: 4, name: 'PJ', age: 28 },
  { id: 5, name: 'JE', age: 27 },
  { id: 6, name: 'JM', age: 32 },
  { id: 7, name: 'HI', age: 24 },
];

var users2 = [
  new User(1, 'ID', 32),
  new User(2, 'HA', 25),
  new User(3, 'BJ', 32),
  new User(4, 'PJ', 28),
  new User(5, 'JE', 27),
  new User(6, 'JM', 32),
  new User(7, 'HI', 24),
];

function findBy(key, list, value) {
  for (const item of list) {
    if (item[key] === value) return item;
  }
}

console.log(findBy('age', users, 32));
// users2의 경우, findBy를 사용할 수 없음
console.log(findBy('age', users2, 32));

function find(list, predicate) {
  for (const item of list) {
    if (predicate(item)) return item;
  }
}

// predicate에 조건을 위임한 find 함수를 통해 문제 해결
console.log(find(users2, (u) => u.getAge() === 32).getId());

function bmatch1(key, val) {
  return (obj) => obj[key] === val;
}

console.log(find(users, bmatch1('id', 1)));

function object(key, val) {
  const obj = {};
  obj[key] = val;
  return obj;
}

function match(obj, obj2) {
  for (const key in obj2) {
    if (obj[key] !== obj2[key]) return false;
  }
  return true;
}

function bmatch(obj2, val) {
  if (arguments.length === 2) obj2 = object(obj2, val);
  return (obj) => match(obj, obj2);
}

console.log(match(find(users, bmatch('id', 3)), find(users, bmatch('name', 'BJ'))));
