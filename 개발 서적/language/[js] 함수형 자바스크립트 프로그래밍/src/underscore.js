const _ = {};

const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

function getLength(list) {
  // void 0 === undefined
  return list === null ? void 0 : list.length;
}

function isArrayLike(list) {
  const length = getLength(list);
  return typeof length === 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
}

_.identity = function (v) {
  return v;
};

_.idtt = _.identity;

_.values = function (list) {
  return _.map(list, _.identity);
};

_.args0 = _.identity;

_.args1 = function (a, b) {
  return b;
};

_.keys = function (list) {
  return _.map(list, _.args1);
};

_.map = function (data, iteratee) {
  const new_list = [];

  if (isArrayLike(data)) {
    for (let i = 0; i < data.length; i++) {
      new_list.push(iteratee(data[i], i, data));
    }
  } else {
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        new_list.push(iteratee(data[key], key, data));
      }
    }
  }

  return new_list;
};

export default _;
