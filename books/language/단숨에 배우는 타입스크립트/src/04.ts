namespace ch04 {
  // enum은 컴파일 시 자바스크립트 객체를 생성하지만, const enum은 아무것도 생성하지 않음
  const enum Direction {
    UP = 'UP',
    DOWN = 'DOWN',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
  }

  // 제네릭은 의존성을 낮춤
  interface Comparator<T> {
    compareTo(value: T): number;
  }

  class Rectangle implements Comparator<Rectangle> {
    constructor(private width: number, private height: number) {}
    compareTo(value: Rectangle): number {
      return this.width * this.height - value.width * value.height;
    }
  }

  class Triangle implements Comparator<Triangle> {
    compareTo(value: Triangle): number {
      return 0;
    }
  }

  const rect1 = new Rectangle(2, 5);
  const rect2 = new Rectangle(2, 3);

  rect1.compareTo(rect2) > 0
    ? console.log('rect1 is bigger')
    : console.log('rect2 is bigger');
}
