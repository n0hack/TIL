// 타입 추론이 가능할지라도 명시적으로 타입을 지정하는 것이 좋음

// 반환 타입을 명시하면, 함수에 대해 더욱 명확하게 알 수 있음
// 내부 로직은 자주 바뀔 수 있지만, 시그니처는 자주 바뀌지 않음
interface Vector2D {
  x: number;
  y: number;
}
// 반환에 Vector2D를 사용하지 않으면, { x: number; y: number }로 추론됨
function add(a: Vector2D, b: Vector2D): Vector2D {
  return {
    x: a.x + b.x,
    y: a.y + b.y,
  };
}

// 타입이 바뀌는 변수는 되도록 피하고, 여러 타입은 각 목적에 맞게 변수로 나누기
// let id: number | string; (x)
const id = 1;
const serial = '1';

interface Vector3 {
  x: number;
  y: number;
  z: number;
}
function getComponent(vector: Vector3, axis: 'x' | 'y' | 'z') {
  return vector[axis];
}
// x가 string으로 추론(타입 넓히기)되어, as const(좁은 타입으로 추론하는 assertion)로 처리함
// let이 아닌, const를 사용하면 변할 일도 없기 때문에 x 자체로 타입을 추론함
let x = 'x' as const;
const x2 = 'x';
let vec = { x: 10, y: 20, z: 30 };
getComponent(vec, x);
getComponent(vec, x2);

// 타입을 좁히기 위해, 타입 가드(is)를 사용할 수 있음
function isInputElement(el: HTMLElement): el is HTMLInputElement {
  return 'value' in el;
}
function getElementContent(el: HTMLElement) {
  if (isInputElement(el)) {
    return el.value;
  }
  return el.innerText;
}

const pharaoh:
  | {
      start: number;
      end: number;
      name: string;
      title: string;
    }
  | {
      name: string;
      title: string;
    } = {
  name: 'z',
  start: 1,
  title: 'hi',
};

// 콜백보다는 프로미스 사용하기
// 함수는 항상 동기 또는 비동기로 사용되어야 하며, 혼용돼서는 안됨
const getNumber = async () => 42;
getNumber().then(console.log);

// as const는 내부까지 상수라는 의미의 assertion
// 다만 너무 과하게 좁히기 때문에 사용에 주의가 필요함
const loc = [10, 20] as const;

console.log(
  [
    [1, 2],
    [3, 4],
  ].flat(1)
);
