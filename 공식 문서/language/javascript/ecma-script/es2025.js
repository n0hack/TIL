// Set 집합 수학 연산 관련 메서드
const A = new Set([1, 2, 3]);
const B = new Set([3, 4, 5]);

console.log(A.union(B));
console.log(A.intersection(B));
console.log(A.difference(B));
console.log(A.isSubsetOf(new Set([1, 2, 3, 4])));

// Promise.try를 통한 동기/비동기 함수를 일관되게 처리
// function maybeSync() {
//   return Math.random() > 0.5 ? 'Sync' : Promise.resolve('Async');
// }

// function asyncCompute(v) {
//   return new Promise((resolve) => setTimeout(() => resolve(v * 2), 1000));
// }

// Promise.try(() => {
//   const val = maybeSync();
//   console.log(val);
// });
