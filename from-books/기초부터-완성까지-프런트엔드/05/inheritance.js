function Vehicle() {
  console.log('initialize Vehicle.');
}

Vehicle.prototype.run = function () {
  console.log('run');
};

Vehicle.prototype.stop = function () {
  console.log('stop');
};

function Car(type) {
  Vehicle.apply(this, arguments);
  this.type = type;
}

function inherit(parent, child) {
  function F() {}
  F.prototype = parent.prototype;
  child.prototype = new F();
  child.prototype.constructor = child;
}

inherit(Vehicle, Car);

console.log(new Car('SUV'));
