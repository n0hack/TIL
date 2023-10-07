namespace TaggedUnion {
  interface Square {
    kind: 'square';
    width: number;
  }

  interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
  }

  type Shape = Square | Rectangle;

  function calculateArea(shape: Shape) {
    if (shape.kind === 'square') {
      return shape.width ** 2;
    } else {
      return shape.width * shape.height;
    }
  }
}
