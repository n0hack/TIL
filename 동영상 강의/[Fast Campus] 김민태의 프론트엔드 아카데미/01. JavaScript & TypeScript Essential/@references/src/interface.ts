/* NOTE 타입과 인터페이스 선택 기준 (From. 김민태님)
  - 1. 선택은 기본적으로 자유이지만, 최대한 일관되게 사용하는 것이 좋다.
  - 2. 데이터만 있는 것에 대해서는 Type, 데이터와 행위를 포함하는 것에 대해서는 Interface가 어울린다.
*/

// 인터페이스에서 정의하는 것들은 기본적으로 모두 public이다.
interface IRect {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

class Rect implements IRect {
  id;

  constructor(public x: number, public y: number, public width: number, public height: number) {
    this.id = Math.random() * 100000;
  }
}

// 생성자에 대한 인터페이스를 정의할 때는 new 키워드를 사용한다.
interface IRectConstructor {
  new (x: number, y: number, width: number, height: number): IRect;
}

// 생성자 자체를 사용하는 함수의 경우, 위 인터페이스를 사용할 수 있다.
function createDefaultRect(ctor: IRectConstructor) {
  return new ctor(0, 0, 100, 100);
}

const rect = createDefaultRect(Rect);
