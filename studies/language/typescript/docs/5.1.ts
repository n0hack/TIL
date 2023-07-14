// 5.1 버전부터 리턴 타입으로 undefined를 명시적으로 지정 가능하다.
function foo(): undefined {}

let x = foo();

function func(): void {
  console.log('a');
}

// 아래는 리턴 타입이 void이기 때문에 에러가 발생한다.
function errorFunc(): void {
  // return 'a';
}

// 하지만, 아래는 void임에도 다른 값 반환이 가능하다.
type VoidFunc = () => void;

const myFunc: VoidFunc = function () {
  return 'hello';
};

const myFunc2: VoidFunc = () => 'hello';

/* 
  forEach와 같은 경우 콜백과 함께 사용하는데, 이 콜백으로 항상 void를 반환하는 함수만 사용할 수 있는가?
  그것은 아니다. 그렇기에 자바스크립트와의 호환성 때문에 이런 결정을 한 것으로 보인다.
*/

// getter, setter에 서로 상관없는 타입 사용 가능해짐
interface Serializer {
  get value(): string;
  set value(v: string);
}
// 단순 선언이기 때문에 런타임 시 에러가 발생하긴 함
declare let box: Serializer;
box.value = 'hello';
console.log(box.value.toUpperCase());
