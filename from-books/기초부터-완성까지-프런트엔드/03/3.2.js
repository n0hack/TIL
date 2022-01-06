const log = console.log;

const user = { name: 'js' };
const id = Symbol('id');
user[id] = 'firstId';

// log(user[id] === user[Symbol('id')]);

// log(302n);
// log(100_000_000);

// Getter & Setter
const obj = {
  myName: 'javascript',
  set name(name) {
    this.myName = name;
  },
  get name() {
    return this.myName;
  },
};
log(Object.getOwnPropertyDescriptor(obj, 'myName'));
Object.defineProperty(obj, 'myName', {
  writable: false,
});
obj.name = 'hello';
log(obj.name);
