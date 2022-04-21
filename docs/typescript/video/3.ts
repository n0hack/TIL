type AddF = (a: number, b: number) => number;
// a와 b는 Call Signature라 한다.
const add3: AddF = (a, b) => a + b;

// 오버로딩(Overloading) = 여러 콜 시그니처를 가지고 있는 함수
// 다형성(Polymorphism)
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === 'string') console.log(config);
  else console.log(config.path);
};

type OverloadingAdd = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};
// 인자의 개수가 다른 경우는 옵션으로 취급
const overAddF: OverloadingAdd = (a, b, c?: number) => {
  return a + b;
};
