function Vehicle() {
  console.log('Vehicle 생성자 호출');
}

Vehicle.prototype.run = function () {
  console.log('Run!');
};

Vehicle.prototype.stop = function () {
  console.log('Stop');
};

function Car(type) {
  this.type = type;
  console.log('Car 생성자 호출');
}

Car.prototype = new Vehicle();
Car.prototype.constructor = Car;

const vehicle = new Vehicle();
const car = new Car('SUV');
