const log = console.log;

const users = [
  { id: 1, name: 'ID', age: 32 },
  { id: 2, name: 'HA', age: 25 },
  { id: 3, name: 'BJ', age: 32 },
  { id: 4, name: 'PJ', age: 28 },
  { id: 5, name: 'JE', age: 27 },
  { id: 6, name: 'JM', age: 32 },
  { id: 7, name: 'HI', age: 24 },
];

var tempUsers = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].age < 30) tempUsers.push(users[i]);
}
log(tempUsers.length);

var ages = [];
for (let i = 0; i < tempUsers.length; i++) {
  ages.push(tempUsers[i].age);
}
log(ages);

var tempUsers = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].age >= 30) tempUsers.push(users[i]);
}
log(tempUsers.length);

var names = [];
for (let i = 0; i < tempUsers.length; i++) {
  names.push(tempUsers[i].name);
}
log(names);
