function test() {
  Array.prototype.forEach.call(arguments, (arg) => console.log(arg));
}

test(1, 2, 3);
