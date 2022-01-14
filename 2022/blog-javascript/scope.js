// func-level
// function foo() {
//   var a = 1;
//   function bar(b) {
//     if (true) {
//       var c = 5;
//     }
//     // 8
//     console.log(a + b + c);
//   }
//   bar(2);
// }
// foo();

// block-level
function foo() {
  let a = 1;
  function bar(b) {
    if (true) {
      const c = 5;
    }
    // ReferenceError: c is not defined
    console.log(a + b + c);
  }
  bar(2);
}
// foo();

var a = 1;

function x() {
  var b = 2;
  function y(c) {
    // 6
    console.log(a + b + c);
    z(4);
  }
  y(3);
}

function z(d) {
  // 5
  console.log(a + d);
}
x();
