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
  this.type = type;
}
