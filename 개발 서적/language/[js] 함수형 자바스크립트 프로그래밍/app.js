import _ from './src/underscore.js';

const log = console.log;

log(_.map([1, 2, 3], (v) => v * 2));
log(_.map({ a: 3, b: 2, c: 1 }, (v) => v * 2));
log(_.keys({ a: 3, b: 2, c: 1 }));
log(_.values({ a: 3, b: 2, c: 1 }));

log(_.each([1, 2, 3], console.log));
