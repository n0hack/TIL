// delay 이후 한 번만 실행
function debounce(func, delay) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}

// delay마다 실행
function throttle(func, delay) {
  let wait = false;

  return (...args) => {
    if (wait) return;

    func(...args);
    wait = true;
    setTimeout(() => {
      wait = false;
    }, delay);
  };
}

// 한 번 호출된 함수는 무시
function once(func) {
  let ran = false;
  let result;

  return function () {
    if (ran) return result;
    result = func.apply(this, arguments);
    ran = true;
    return result;
  };
}

// 특정 함수의 결과를 캐싱 (메모이제이션)
function memoize(func) {
  const cache = new Map();
  return function () {
    const key = JSON.stringify(arguments);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = func.apply(this, arguments);
    cache.set(key, result);
    return result;
  };
}

// 객체에서 특정한 값 선택
function pick(obj, keys) {
  return keys.reduce((acc, key) => {
    if (obj.hasOwnProperty(key)) acc[key] = obj[key];
    return acc;
  }, {});
}

// 객체에서 특정 프로퍼티 제외
function omit(obj, keys) {
  return Object.keys(obj)
    .filter((key) => !keys.includes(key))
    .reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {});
}
