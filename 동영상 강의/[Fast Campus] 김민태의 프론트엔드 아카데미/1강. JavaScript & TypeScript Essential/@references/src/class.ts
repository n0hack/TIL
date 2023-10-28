namespace Class {
  abstract class Shape {
    public static MIN_BORDER_WIDTH = 0;
    public static MAX_BORDER_WIDTH = 30;

    public readonly name: string = 'Shape';
    protected _borderWidth: number;
    private action: string;

    constructor(borderWidth: number = 0) {
      this._borderWidth = borderWidth;
    }

    abstract area: () => number;

    // 단순히 값만 반환하고 싶은 경우, readonly로 멤버변수를 선언하면 된다.
    // 하지만, 값을 변경할 수는 없으니, 복잡한 작업을 추가한다면 getter/setter를 사용하는 것이 좋다.
    get borderWidth() {
      return this._borderWidth;
    }

    set borderWidth(width: number) {
      if (width < Shape.MIN_BORDER_WIDTH) {
        this._borderWidth = Shape.MIN_BORDER_WIDTH;
      } else if (width > Shape.MAX_BORDER_WIDTH) {
        this._borderWidth = Shape.MAX_BORDER_WIDTH;
      } else {
        this._borderWidth = width;
      }
    }
  }

  class Circle extends Shape {
    private _redius: number;
    public name: string = 'Circle';

    constructor(radius: number) {
      super();
      this._redius = radius;
    }

    get radius() {
      return this._redius;
    }

    area = () => this._redius ** 2 * Math.PI;
  }

  class Rect extends Shape {
    private _width: number;
    private _height: number;

    constructor(width: number, height: number) {
      super();
      this._width = width;
      this._height = height;
    }

    get width() {
      return this._width;
    }

    get height() {
      return this._height;
    }

    area = () => this.width * this.height;
  }
}
