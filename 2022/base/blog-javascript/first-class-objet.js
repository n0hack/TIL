//  1. 런타임 시점에 무명의 리터럴로 생성할 수 있으며,
//  2. 변수나 자료구조(배열/객체)에 할당할 수 있다.
const sum = function (a, b) {
  return a + b;
};
const sub = function (a, b) {
  return a - b;
};

//  함수의 매개변수로 전달할 수 있다. (Callback)
function myForEach(list, callback) {
  for (let i = 0; i < list.length; i++) {
    callback(i, list[i], list);
  }
}
myForEach([1, 2, 3, 4, 5], console.log);

//  함수의 반환값으로 사용할 수 있다. (Closure)
const userManager = (function () {
  let userNum = 0;

  return {
    addUser() {
      userNum++;
    },
    delUser() {
      userNum--;
    },
  };
})();
userManager.addUser();
userManager.delUser();
