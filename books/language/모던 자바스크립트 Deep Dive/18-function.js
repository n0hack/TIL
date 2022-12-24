function multiply(a, b) {
  const iterator = arguments[Symbol.iterator]();
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  return a * b;
}
console.log(multiply(2, 3));
