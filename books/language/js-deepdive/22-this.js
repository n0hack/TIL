global.value = 1;

const obj = {
  value: 100,
  foo() {
    console.log("foo's this: ", this);
    setTimeout(function () {
      console.log("callback's this: ", this);
      console.log("callback's this.value: ", this.value);
    }, 100);
  },
};

obj.foo();
