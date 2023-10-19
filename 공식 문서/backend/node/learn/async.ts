// console.log('console.log');
// setTimeout(() => console.log('setTimeout'), 0);
// setImmediate(() => console.log('setImmediate'));
// process.nextTick(() => console.log('nextTick'));

import EventEmitter from 'events';

const baz = () => console.log('baz');
const foo = () => console.log('foo');
const zoo = () => console.log('zoo');
const start = () => {
  console.log('start');
  setImmediate(baz);
  new Promise((resolve, reject) => {
    resolve('bar');
  }).then((resolve) => {
    console.log(resolve);
    process.nextTick(zoo);
  });
  process.nextTick(foo);
};
start();

// start foo bar zoo baz

const ev = new EventEmitter();
ev.on('test', (args) => {
  console.log('test 이벤트', args);
});
ev.emit('test', { msg: 'hello' });
