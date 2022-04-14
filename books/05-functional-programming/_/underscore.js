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

_.map = function (iter, iteratee) {
  const res = [];

  if (isArrayLike(iter)) {
    for (let i = 0; i < iter.length; i++) {
      res.push(iteratee(iter[i], i, iter));
    }
  } else {
    for (let key in iter) {
      if (iter.hasOwnProperty(key)) {
        res.push(iteratee(iter[key], key, iter));
      }
    }
  }
  return res;
};
