function foo() {
  let x = 1;
  function bar() {
    const y = 2;
    var z = 3;
    // 6
    console.log(x + y + z);
  }
  bar();
}
foo();
