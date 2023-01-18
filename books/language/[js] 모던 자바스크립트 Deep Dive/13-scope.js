var x = "global";

function foo() {
  var x = "local";
  console.log(x);
}
foo();

console.log(x);

// 함수 레벨 스코프
// 자바스크립트는 함수가 정의된 스코프에 따라 변수의 유효범위가 결정이 됨
var x = 1;
function foo() {
  var x = 10;
  bar();
}
function bar() {
  console.log(x);
}
foo();
bar();
