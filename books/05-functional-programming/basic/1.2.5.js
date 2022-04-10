const log = console.log;

const filter = (list, predicate) => {
  const newList = [];
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i])) newList.push(list[i]);
  }

  return newList;
};

const map = (list, iteratee) => {
  const newList = [];
  for (let i = 0; i < list.length; i++) {
    newList.push(iteratee(list[i]));
  }
  return newList;
};

const logLength = (value) => {
  log(value.length);
  return value;
};

const users = [
  { id: 1, name: 'ID', age: 32 },
  { id: 2, name: 'HA', age: 25 },
  { id: 3, name: 'BJ', age: 32 },
  { id: 4, name: 'PJ', age: 28 },
  { id: 5, name: 'JE', age: 27 },
  { id: 6, name: 'JM', age: 32 },
  { id: 7, name: 'HI', age: 24 },
];

log(
  logLength(
    map(
      filter(users, (u) => u.age < 30),
      (u) => u.age
    )
  )
);

log(
  logLength(
    map(
      filter(users, (u) => u.age >= 30),
      (u) => u.name
    )
  )
);
