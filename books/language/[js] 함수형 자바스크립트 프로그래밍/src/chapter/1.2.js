// 함수형 자바스크립트의 실용성
var users = [
  { id: 1, name: 'ID', age: 32 },
  { id: 2, name: 'HA', age: 25 },
  { id: 3, name: 'BJ', age: 32 },
  { id: 4, name: 'PJ', age: 28 },
  { id: 5, name: 'JE', age: 27 },
  { id: 6, name: 'JM', age: 32 },
  { id: 7, name: 'HI', age: 24 },
];

// 명령형 코드
var temp_users = [];
for (var i = 0, len = users.length; i < len; i++) {
  if (users[i].age < 30) temp_users.push(users[i]);
}
console.log(temp_users.length);

var ages = [];
for (var i = 0, len = temp_users.length; i < len; i++) {
  ages.push(temp_users[i].age);
}
console.log(ages);

var temp_users = [];
for (var i = 0, len = users.length; i < len; i++) {
  if (users[i].age >= 30) temp_users.push(users[i]);
}
console.log(temp_users.length);

var names = [];
for (var i = 0, len = temp_users.length; i < len; i++) {
  names.push(temp_users[i].name);
}
console.log(names);

// 리팩토링
console.log('\n\n');
// filter: 조건을 predicate에 위임
function filter(list, predicate) {
  var new_list = [];
  for (const a of list) {
    if (predicate(a)) new_list.push(a);
  }
  return new_list;
}

// map: 무엇을 push할지를 iteratee에 위임
function map(list, iteratee) {
  var new_list = [];
  for (const a of list) {
    new_list.push(iteratee(a));
  }
  return new_list;
}

var users_under_30 = filter(users, (user) => user.age < 30);
console.log(users_under_30.length);

var ages = map(users_under_30, (user) => user.age);
console.log(ages);

var users_over_30 = filter(users, (user) => user.age >= 30);
console.log(users_over_30.length);

var names = map(users_over_30, (user) => user.name);
console.log(names);

// 한 줄로 줄이기
console.log('\n\n');
// log_length: 함수의 길이를 출력하고, 값을 반환하는 함수
function log_length(value) {
  console.log(value.length);
  return value;
}

console.log(
  log_length(
    map(
      filter(users, (user) => user.age < 30),
      (user) => user.age
    )
  )
);

// 커링을 이용해 한 번 더 줄이기
console.log('\n\n');

const bvalue = (key) => (obj) => obj[key];
console.log(
  log_length(
    map(
      filter(users, (user) => user.age < 30),
      bvalue('age')
    )
  )
);
