/* Underscore */
const _ = {};

_.map = function (list, iteratee) {
  const newList = [];
  for (let i = 0; i < list.length; i++) {
    newList.push(iteratee(list[i], i, list));
  }
  return newList;
};

_.filter = function (list, predicate) {
  const newList = [];
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i], i, list)) newList.push(list[i]);
  }
  return newList;
};

_.find = function (list, predicate) {
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i], i, list)) return list[i];
  }
};

_.findIndex = function (list, predicate) {
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i], i, list)) return i;
  }
  return -1;
};

_.identify = function (v) {
  return v;
};

_.falsy = function (v) {
  return !v;
};

_.truthy = function (v) {
  return !!v;
};

// 유틸 함수
const not = (a) => !a;
const beq = (a) => (b) => a === b;
const positive = (list) => _.find(list, _.identify);
const negative = (list) => _.findIndex(list, _.falsy);

/* 리스트의 아이템 중 하나라도 참이라면 true */
_.some = function (list) {
  return not(not(positive(list)));
};

/* 리스트의 아이템 모두 참이라면 true */
_.every = function (list) {
  // 하나라도 거짓이라면 거짓인데, filter는 모두 순회하기에 비효율적
  // return _.filter(list, _.identify).length === list.length;
  return beq(-1)(negative(list));
};
