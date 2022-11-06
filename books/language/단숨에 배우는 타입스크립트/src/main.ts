function whoAmI(target: Function): void {
  console.log(`You are:`, target);
}

@whoAmI
class Friend {
  constructor(private name: string, private age: number) {}
}

function UIComponent(html: string) {
  console.log(`The decorator received ${html}\n`);
  return function (target: Function) {
    console.log(`Someone wants to create a UI Component from\n${target}`);
  };
}

@UIComponent('<h1>Hello Shopper!</h1>')
class Shopper {
  constructor(private name: string) {}
}

// 믹스인 (Mixin) - 특정 동작을 구현하는 클래스
type constructorMixin = {
  new (...args: any[]): {};
};

function useSalutation(salutaion: string) {
  // 데코레이터 Body
  return function <T extends constructorMixin>(target: T) {
    // 클래스 상속 후 재구현
    return class extends target {
      private message = 'Hello ' + salutaion + (this as any).name;

      sayHello() {
        console.log(`${this.message}`);
      }

      sayGoodbye() {
        console.log('Bye');
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

const grt = new Greeter('John');
grt.sayHello();
(grt as any).sayGoodbye();

/**
 * 로그 메서드 데코레이터
 * @param target 메서드를 참조하는 객체
 * @param key 메서드 이름
 * @param descriptor 메서드 디스크립터
 */
function logTrade(target: any, key: string, descriptor: PropertyDescriptor) {
  // 원본 저장
  const originalMethod = descriptor.value;

  descriptor.value = function () {
    console.log(`Invoked ${key} providing:`, arguments);
    return originalMethod.apply(this, arguments);
  };

  return descriptor;
}

class Trade {
  @logTrade
  placeOrder(
    stockName: string,
    quantity: number,
    operation: string,
    traderID: number
  ) {
    console.log('호출');
  }
}

const trade = new Trade();
trade.placeOrder('IBM', 100, 'BUY', 123);

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Modifiable<T> = {
  -readonly [P in keyof T]: T[P];
};

type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

type MyRequired<T> = {
  [P in keyof T]-?: T[P];
};

// 일부만 Pick
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

interface Person {
  name: string;
  age: number;
}

const roPerson: MyReadonly<Person> = {
  name: 'NoHack',
  age: 29,
};

const pickPerson: MyPick<Person, 'name'> = {
  name: 'NoHack',
};

// MyPromise
type SyncService = {
  baseUrl: string;
  getA(): string;
};

type MyPromise<T> = T extends (...args: infer A) => infer R
  ? (...args: A) => Promise<R>
  : T;

type Promisify<T> = {
  [P in keyof T]: MyPromise<T[P]>;
};

const test: Promisify<SyncService> = {
  baseUrl: 's',
  getA() {
    return Promise.resolve('');
  },
};
