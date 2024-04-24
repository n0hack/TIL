// https://velog.io/@surim014/use-maps-more-and-objects-less
const myMap = new Map();

// map은 키 순서가 보장되어 있다.
const [[firstKey, firstValue]] = myMap;

// 복사도 객체만큼 간편하다.
const copied = new Map(myMap);
const deepCopy = structuredClone(myMap);

// 객체와 Map을 서로 변환하기도 쉽다. [key, value] 형태만 신경쓰면 된다.
const makeMap = (obj) => new Map(Object.entries(obj));
const myMap2 = makeMap({ key: 'value', key2: 'value2' });

const obj = Object.fromEntries(myMap2);

// Map은 모든 타입을 키로 사용할 수 있다.
// 하지만 객체를 키로 사용하는 경우, 참조가 유지되기에 주의해야 한다.(가비지 컬렉션 문제)
const myTodo = {
  text: 'Learn JavaScript',
  completed: false,
};

const metadata = new Map();
metadata.set(myTodo, 'metadata');

// WeakMap를 사용하면, 객체에 대한 참조가 없어질 때 메모리에서 제거된다.(메모리 누수 해결)
const metadata2 = new WeakMap();
metadata2.set(myTodo, 'metadata');
