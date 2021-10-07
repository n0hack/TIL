// async, await은 프로미스를 기반으로 동작한다.
// 프로미스의 후속 처리 메소드 없이 동기처럼 동작할 수 있게 함
// async 함수는 반환 값이 언제나 프로미스이며, 값만 적으면 암묵적으로 resolve 객체로 래핑됨
async function foo() {
  // 서로 관계가 없다면, 묶어서 병렬 처리 가능 Promiss.all
  const res = await Promise.all([
    new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
    new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
  ]);

  console.log(res);
}
foo();
