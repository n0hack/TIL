const arrlike = {
  [Symbol.iterator]() {
    this.i = 0;
    return this;
  },
  next() {
    return { value: this[this.i], done: ++this.i > this.length };
  },
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  4: 5,
  length: 5,
};

for (const value of arrlike) {
  console.log(value); // 1 2 3 4 5
}

// const [a, b] = arrlike;
// console.log(a, b); // 1 2

// console.log(...arrlike); // 1 2 3 4 5

// console.log(Array.from(arraylike));

const text = '안녕하세요!';
for (let i = 0; i < text.length; i++) {
  // 안 녕 하 세 요 !
  console.log(text[i]);
}

function foo() {
  // [Arguments] { '0': 'hello', '1': 'jerry', '2': 123 }
  console.log(arguments);
}
foo('hello', 'jerry', 123);
