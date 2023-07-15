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

_.isObject = (obj) => {
  const type = typeof obj;
  return type === 'function' || (type === 'object' && !!obj);
};

_.keys = function (data) {
  return _.isObject(data) ? Object.keys(data) : [];
};

// map과 each 로직 추상화
function bloop(new_data, body) {
  return function (data, iteratee) {
    const result = new_data(data);

    if (isArrayLike(data)) {
      for (let i = 0; i < data.length; i++) {
        body(iteratee(data[i], i, data), result);
      }
    } else {
      for (let i = 0, keys = _.keys(data), len = keys.length; i < len; i++) {
        body(iteratee(data[keys[i]], keys[i], data), result);
      }
    }

    return result;
  };
}

_.array = () => [];

_.push_to = (val, obj) => {
  obj.push(val);
  return val;
};

_.boop = () => undefined;

_.map = bloop(_.array, _.push_to);

_.each = bloop(_.identity, _.boop);

export default _;
