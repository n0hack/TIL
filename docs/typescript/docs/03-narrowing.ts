function padLeft(padding: number | string, input: string) {
  if (typeof padding === 'number') {
    return ' '.repeat(padding) + input;
  }
  return padding + input;
}

function printAll(strs: string | string[] | null) {
  // js에서 null은 원시값이지만, 초기 설정 오류로 인해 object이다.
  // 따라서 이 점을 유의해야 한다.
  if (typeof strs === 'object') {
    for (const s of strs) {
    }
  } else if (typeof strs === 'string') {
    console.log('string!');
  } else {
    console.log('others!');
  }
}

// 타입스크립트는 if가 붙으면 boolean 타입으로 판단
function Truthness(n: number) {
  if (n) {
    console.log('true');
  } else {
    console.log('false');
  }
}
Truthness(1);

interface IContainer {
  value: number | null | undefined;
}

function multiplyValue(container: IContainer, factor: number) {
  // 느슨한 비교의 경우 null과 비교할 뿐만 아니라 undefined까지 체크
  if (container.value != null) {
    console.log(container.value);
    container.value *= factor;
    console.log(container.value);
  }
}
multiplyValue({ value: 5 }, 2);

// let으로 선언된 변수는 이후 재할당 시 초기 할당 타입을 따라감
let vX = Math.random() < 0.5 ? 10 : 'hello world';
// number | string
vX = true;

type n = number;

function isNum(n: number): n is number {
  return typeof n === 'number';
}
console.log(isNum(5));

interface IShape {
  kind: 'Circle' | 'Square';
  radius?: number;
  sideLength?: number;
}

function handleShape(shape: IShape) {
  // if(shape.kind === "Rect") 이 조건은 무조건 false이므로 에러
  if (shape.kind === 'Circle') {
    // shape.radius는 undefined일 수도 있지만, !를 붙이게 되면 반드시 undefined가 아님을 주장
    return Math.PI * shape.radius! ** 2;
  }
}

interface ICircle {
  kind: 'Circle';
  radius: number;
}

interface ISquare {
  kind: 'Square';
  sideLength: number;
}

type Shape = ICircle | ISquare;

function getArea(shape: Shape) {
  // 이 경우에는 조건 연산을 통해 프로퍼티 존재 여부를 추론할 수 있음
  if (shape.kind === 'Circle') {
    return Math.PI * shape.radius ** 2;
  } else if (shape.kind === 'Square') {
  } else {
    // 존재하지 않아야 하는 타입 never
    const exhaustiveCheck: never = shape;
    return exhaustiveCheck;
  }
}
