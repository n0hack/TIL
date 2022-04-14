const _ = {};

const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

function getLength(list) {
  // void 0은 undefined
  return list === null ? void 0 : list.length;
}

function isArrayLike(list) {
  const length = getLength(list);
  return typeof length === 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
}

function bloop(newData, body) {
  return function (data, iteratee) {
    const result = newData(data);
    if (isArrayLike(data)) {
      for (let i = 0; i < data.length; i++) {
        body(iteratee(data[i], i, data), result);
      }
    } else {
      for (let key in data) {
        if (data.hasOwnProperty(key))
          body(iteratee(data[key], key, data), result);
      }
    }
    return result;
  };
}

_.array = function () {
  return [];
};

_.pushTo = function (val, obj) {
  return obj.push(val);
};

_.identity = function (v) {
  return v;
};

_.noop = function () {};

_.values = function (iter) {
  return _.map(iter, _.identity);
};

_.map = bloop(_.array, _.pushTo);

_.each = bloop(_.identity, _.noop);
