const radius = 10;

const circle = {
  radius: 5,
  getDiameter: function () {
    console.log(this);
    return 2 * this.radius;
  },
};

console.log(circle.getDiameter());
