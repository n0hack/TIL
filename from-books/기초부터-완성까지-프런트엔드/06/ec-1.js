console.log('전역 컨텍스트');

function foo() {
  console.log('foo 컨텍스트');
}

function bar() {
  foo();
  console.log('bar 컨텍스트');
}
// 전역 컨텍스트
// foo 컨텍스트
// bar 컨텍스트
bar();
