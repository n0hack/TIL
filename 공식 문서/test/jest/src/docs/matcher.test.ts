import { sum } from './util';

test('object assignment', () => {
  const data: { one: number; two?: number } = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test('2 + 2', () => {
  const value = sum(2, 2);
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(4);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
});

test('adding floating point numbers', () => {
  const value = sum(0.1, 0.2);
  // expect(value).toBe(0.3);
  expect(value).toBeCloseTo(0.3); // 실수를 계산할 때는 이 matcher 사용
});

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  // compileAndroidCode();
  expect(() => compileAndroidCode()).toThrow(); // 함수를 실행했을 때 에러가 나는지 확인
  expect(() => compileAndroidCode()).toThrow(Error); // 에러의 타입이 맞는지 확인
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
