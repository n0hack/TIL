interface Rectangle {
  width: number;
  height: number;
}

interface Circle {
  radius: number;
}

type Shape = Rectangle | Circle;

function getArea(shape: Shape) {
  if ('width' in shape) {
    return shape.width * shape.height;
  }
  return shape.radius * shape.radius * Math.PI;
}

console.log(getArea({ radius: 3 }));
