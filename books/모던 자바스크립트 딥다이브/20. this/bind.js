var value = 1;
const obj = {
  value: 100,
  foo() {
    console.log("foo's this: ", this);
    // 브라우저에서는 일반 함수로 호출하면 전역 객체를 가리킴
    // Node.js는 Timeout 스코프를 가리키는 듯?
    setTimeout(
      function () {
        console.log("callback's this: ", this);
        console.log("callback's this.value: ", this.value);
      }.bind(this),
      100
    );
  },
};
obj.foo();
