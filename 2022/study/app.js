const log = console.log;

const obj = {
  lang: 'javascript',
  greeting: () => {
    return `hello, ${this.lang}`;
  },
};

console.log(obj.greeting());
