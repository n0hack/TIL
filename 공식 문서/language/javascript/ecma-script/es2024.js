const products = [
  {
    name: 'IPhone',
    category: 'phone',
    price: 1000,
  },
  {
    name: 'Galaxy',
    category: 'phone',
    price: 800,
  },
  {
    name: 'MacBook',
    category: 'laptop',
    price: 1500,
  },
  {
    name: 'iPad',
    category: 'tablet',
    price: 1200,
  },
];

// Object.groupBy, Map.groupBy
// 배열과 같은 이터러블을 그룹화하는 메서드
console.log(Object.groupBy(products, (product) => product.category));
console.log(Map.groupBy(products, (product) => product.category));

// Promise 자체가 resolve, reject와 동일 스코프에 존재하게 되며, 중첩도 줄어듦
const { promise, resolve, reject } = Promise.withResolvers();

promise.then(console.log).catch(console.error); // or await promise()

// 어딘가에서 비동기 완료 시
setTimeout(() => resolve('Resolved'), 1000);

// 바이너리 버퍼를 동적 크기 조절하고, 제로-카피 전송하는 표준 API
// 이미지/동영상 처리, 파일 업로드 청크링 등 대용량 스트림 처리에 유용하며, 메모리 사용량 최적화 가능
const buf = new ArrayBuffer(1 << 20, { maxByteLength: 64 << 20 }); // 1MB (최대 64MB까지 동적 조절)
console.log(buf.detached); // false

buf.resize(4 << 20); // 4MB

const out = buf.transfer(); // buf는 더 이상 사용할 수 없게 되며, 새로운 버퍼로 소유권 이전
console.log(buf.detached); // true
console.log(out.detached); // false
