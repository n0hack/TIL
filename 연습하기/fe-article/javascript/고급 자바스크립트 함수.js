// https://velog.io/@typo/advanced-javascript-functions-to-improve-code-quality
/**
 * Debounce
 * - 하나의 함수가 연이어 호출될 때, 마지막 함수만 호출하도록 하는 기법
 * - ex) 연관 검색어, 윈도우 리사이즈 이벤트 등
 */
function debounce(func, delay) {
  let timeout;

  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}

/**
 * Throttle
 * - 일정 시간 동안 최대 한 번만 호출되도록 하는 기법
 * - ex) 스크롤 이벤트, 마우스 이벤트 등
 */
function throttle(func, delay) {
  let wait = false;

  return (...args) => {
    if (wait) {
      return;
    }

    func(...args);
    wait = true;
    setTimeout(() => {
      wait = false;
    }, delay);
  };
}

/**
 * Once
 * - 한 번만 실행되도록 하는 기법
 */
function once(func) {
  let ran = false;
  let result;

  return function () {
    if (ran) return result;
    result = func.aplly(this, arguments);
    ran = true;
    return result;
  };
}

/**
 * Memoize
 * - 동일한 인자가 들어올 때, 이전에 계산한 값을 반환하는 기법
 */
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

/**
 * Currying
 * - 이미 존재하는 함수를 이용해 새로운 함수를 만드는 기법
 */
function curry(func, arity = func.length) {
  return function curried(...args) {
    if (args.length >= arity) return func(...args);
    return function (...moreArgs) {
      return curried(...args, ...moreArgs);
    };
  };
}

/**
 * Partial
 * - 함수의 일부 인자를 고정한 새로운 함수를 만드는 기법
 */
function partial(func, ...args) {
  return function partiallyApplied(...moreArgs) {
    return func(...args, ...moreArgs);
  };
}

/**
 * Pipe
 * - 함수를 연속적으로 실행하는 기법
 */
function pipe(...funcs) {
  return function piped(...args) {
    return funcs.reduce((result, func) => [func.call(this, ...result)], args)[0];
  };
}

/**
 * Compose
 * - 함수를 연속적으로 실행하는 기법(Pipe와 동일하지만, 순서가 반대)
 */
function compose(...funcs) {
  return function composed(...args) {
    return funcs.reduceRight((result, func) => [func.call(this, ...result)], args)[0];
  };
}
