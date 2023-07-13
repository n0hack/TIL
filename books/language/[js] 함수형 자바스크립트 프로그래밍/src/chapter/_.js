const not = (v) => !v;

const identity = (v) => v;

const beq = (a) => (b) => a === b;

const positive = (list) => _.find(list, identity);

const nagativeIndex = (list) => _.findIndex(list, not);

// my underscore lib
const _ = {};

_.map = (list, iteratee) => {
  const new_list = [];
  for (const item of list) {
    new_list.push(iteratee(item));
  }
  return new_list;
};

_.filter = (list, predicate) => {
  const new_list = [];
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i], i, list)) new_list.push(list[i]);
  }
  return new_list;
};

_.find = (list, predicate) => {
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i], i, list)) return list[i];
  }
};

_.findIndex = (list, predicate) => {
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i], i, list)) return i;
  }
  return -1;
};

_.compose = function () {
  const args = arguments;
  const start = args.length - 1;

  return function () {
    let i = start;
    let result = args[start].apply(this, arguments);
    while (i--) result = args[i].call(this, result);
    return result;
  };
};

// _.some = (list) => !!positive(list);
_.some = _.compose(not, not, positive);

// every가 모든 요소를 순회하기 때문에 성능 관련 리팩토링
// every: (list) => _.filter(list, _.identity).length === list.length,
// _.every = (list) => beq(-1)(nagativeIndex(list));
_.every = _.compose(beq(-1), nagativeIndex);

export default _;
