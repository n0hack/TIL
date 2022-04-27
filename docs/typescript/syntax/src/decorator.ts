// 반환 타입이 void인 경우 클래스를 수정하지 않고, 읽기만 함
function whoAmI(target: Function): void {
  console.log(`You are: \n${target}`);
}

// tsc로 변환 중 데코레이터가 적용되었는지 평가하고,
// 런타임 시 실행될 자바스크립트가 생성됨
@whoAmI
class Friend {
  constructor(private name: string, private age: number) {}
}

function UIComponent(html: string) {
  console.log(`The decorator received ${html}\n`);
  return function (target: Function) {
    console.log(`Someone wants to create a UI component from\n${target}`);
  };
}

@UIComponent('<h1>Hello</h1>')
class Shopper {
  constructor(private name: string) {}
}

console.log();
console.log();

type ConstructorMixin = { new (...args: any[]): {} };
// 믹스인(Mixin): 클래스를 변경하는 데코레이터
function useSalutation(salutation: string) {
  // 팩토리
  return function <T extends ConstructorMixin>(target: T) {
    return class extends target {
      name: string;
      message: string = `${salutation}`;
      sayHello() {
        console.log(`Hello ${this.message}${this.name}`);
      }
    };
  };
}

@useSalutation('Mr.')
class Greeter {
  constructor(public name: string) {}
  sayHello() {
    console.log(`Hello ${this.name}`);
  }
}

const grt = new Greeter('NoHack');
grt.sayHello();

class Trade {
  @logTrade
  placeOrder(
    stockName: string,
    quantity: number,
    operation: string,
    traderID: number
  ) {
    console.log(arguments);
  }
}

function logTrade(target, key, descriptor) {
  const originalCode = descriptor.value;
  descriptor.value = function () {
    console.log(`Invoked ${key} providing:`, arguments);
    originalCode.apply(this, arguments);
  };
  return descriptor;
}

const trade = new Trade();
trade.placeOrder('IBM', 100, 'Buy', 123);
trade.placeOrder('NoHack', 123, 'zz', 1111);
