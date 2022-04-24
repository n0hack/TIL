// 데코레이터는 런타임에 호출?
function whoAmI(target: Function): void {
  console.log(`You are:\n${target}`);
}

@whoAmI
class Friend {
  constructor(private name: string, private age: number) {}
}

function UIComponent(html: string) {
  console.log(`The decorator received ${html}\n`);
  return function (target: Function) {
    console.log(`Someone wants to create a UI Compoentn from\n${target}`);
  };
}

@UIComponent('<h1>HEllo Shopper!</h1>')
class Shopper {
  constructor(private name: string) {}
}

type constructorMixin = { new (...args: any[]): {} };

function useSalutation(salutation: string) {
  return function <T extends constructorMixin>(target: T) {
    return class extends target {
      name: string;
      private message: string;
      sayHello() {
        this.message = this.name;
        console.log(this);
      }
    };
  };
}

@useSalutation('Mr. ')
class Greeter {
  constructor(public name: string) {}
  sayHello() {
    console.log(`Hello ${this.name}`);
  }
}
const grt = new Greeter('John');
grt.sayHello();

class Trade {
  @logTrade
  placeOrder(
    stockName: string,
    quantity: number,
    operation: string,
    traderID: number
  ) {
    console.log('called');
  }
}
const trade = new Trade();
trade.placeOrder('IBM', 100, 'Buy', 123);

function logTrade(target, key, descriptor) {
  // 원본 메서드 저장
  const originalCode = descriptor.value;
  // 메서드 수정
  descriptor.value = function () {
    console.log(`Invoked ${key} providing:`, arguments);
    return originalCode.apply(this, arguments);
  };
  return descriptor;
}
