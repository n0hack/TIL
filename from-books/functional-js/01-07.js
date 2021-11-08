console.clear();
const log = console.log;

// 좀 더 실용적인 예시
var users = [
  { id: 1, name: 'ID', age: 32 },
  { id: 2, name: 'HA', age: 25 },
  { id: 3, name: 'BJ', age: 32 },
  { id: 4, name: 'PJ', age: 28 },
  { id: 5, name: 'JE', age: 27 },
  { id: 6, name: 'JM', age: 32 },
  { id: 7, name: 'HI', age: 24 },
];

function User(id, name, age) {
  this.id = id;
  this.name = name;
  this.age = age;
}

var users2 = [
  new User(1, 'ID', 32),
  new User(2, 'HA', 25),
  new User(3, 'BJ', 32),
  new User(4, 'PJ', 28),
  new User(5, 'JE', 27),
  new User(6, 'JM', 32),
  new User(7, 'HI', 24),
];

var user;
function findBy(key, list, val) {
  for (let i = 0; i < list.length; i++) {
    if (list[i][key] === val) return list[i];
  }
}

// 콜백으로 조건을 평가하면, 재사용성이 매우 높아짐
// 함수형 프로그래밍은 다형성이 높은 기법을 많이 사용하여 유용하다.
function find(iter, predicate) {
  for (const a of iter) {
    if (predicate(a)) return a;
  }
}

log(find(users, (a) => a.name === 'PJ'));
log(find(users2, (a) => a.name === 'PJ'));

console.log('\n\n');

function bMatch1(key, val) {
  return function (obj) {
    return obj[key] === val;
  };
}

log(find(users, bMatch1('name', 'PJ')));
log(find(users2, bMatch1('name', 'PJ')));

console.log('\n\n');

function object(key, val) {
  var obj = {};
  obj[key] = val;
  return obj;
}

function match(obj, obj2) {
  for (var key in obj2) {
    if (obj[key] !== obj2[key]) return false;
  }
  return true;
}

function bMatch(obj2, val) {
  if (arguments.length === 2) obj2 = object(obj2, val);
  return function (obj) {
    return match(obj, obj2);
  };
}

log(match(find(users, bMatch('id', 3)), find(users, bMatch('name', 'BJ'))));
log(match(find(users, bMatch({ id: 3 }), find(users, bMatch('name', 'BJ')))));
