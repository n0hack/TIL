// import './chapter/1.3.js';
import _ from './chapter/_.js';

console.log(_.some([0, null, 2]));
console.log(_.some([0, null, false]));

console.log(_.every([0, null, 2]));
console.log(_.every([{}, true, 2]));

var greet = (name) => 'hi: ' + name;
var exclaim = (statement) => statement.toUpperCase() + '!';
var welcome = _.compose(greet, exclaim);
console.log(welcome('moe'));
