// 함수 합성
const compose = function () {
  let args = arguments;
  let start = args.length - 1;

  return function () {
    let i = start;
    let result = args[i].apply(this, arguments);
    while (i--) result = args[i].call(this, result);
    return result;
  };
};

const greet = function (name) {
  return 'hi ' + name;
};
const exclaim = function (statement) {
  return statement.toUpperCase() + '!';
};
const welcome = compose(greet, exclaim);
console.log(welcome('moe'));
