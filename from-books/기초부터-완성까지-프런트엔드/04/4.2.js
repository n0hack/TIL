'use strict';
function func() {
  console.log(this);
}
console.log(this);
func();
