// 테스트 동시 실행
test.concurrent('두 숫자 더하기', () => {
  expect(1 + 2).toBe(3);
});

test.concurrent('두 숫자 더하기', () => {
  expect(6 + 3).toBe(9);
});
