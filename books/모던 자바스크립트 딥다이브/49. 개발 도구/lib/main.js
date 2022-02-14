"use strict";

var _lib = require("./lib");

console.log(_lib.pi);
console.log((0, _lib.power)(_lib.pi, _lib.pi));
const f = new _lib.Foo();
console.log(f.foo());
console.log(f.bar());