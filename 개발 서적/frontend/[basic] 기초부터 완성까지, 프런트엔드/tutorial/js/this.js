const name = 'global name';

const obj = {
  name: 'lucid',
  greeting() {
    console.log(this);
    return this.name;
  },
  greeting2: () => {
    setTimeout(() => {
      console.log(this);
    }, 0);
  },
};

console.log(obj.greeting());
console.log(obj.greeting2());
