const log = console.log;

// 커링 (부분 적용)
function addMaker(a) {
  return function (b) {
    return a + b;
  };
}
// console.log(addMaker(3)(5));
