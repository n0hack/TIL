namespace Decorator {
  function whoAmI(target: Function) {
    console.log(`You are \n${target}`);
  }

  @whoAmI
  class Friend {
    constructor(private name: string, private age: number) {}
  }

  // 데코레이터 팩토리 (런타임에 데코레이터에 의해 호출될 표현식 반환)
  function UIComponent(html: string) {
    console.log(`Decorator html: ${html}`);
    return function (target: Function) {
      console.log(`Create UI Component from\n${target}`);
    };
  }

  @UIComponent('<h1>Hello Shopper!</h1>')
  class Shopper {
    constructor(private name: string) {}
  }

  // 클래스 믹스인
  type constructorMixin = { new (...args: any[]): {} };

  function useSalutation(salutation: string) {
    return function <T extends constructorMixin>(target: T) {
      return class extends target {
        private message = `Hello ${salutation}`;
        sayHello() {
          console.log(`${this.message}`);
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
    ) {}
  }
  const trade = new Trade();
  trade.placeOrder('IBM', 100, 'Buy', 123);

  // 메서드 클래스 참조 객체, 메서드 데코레이터 이름, 메서드 데코레이터의 디스크립터
  function logTrade(target: Object, key: string, descriptor: any) {
    console.log(target, key, descriptor);
    const originalCode = descriptor.value;
    descriptor.value = function () {
      console.log(`Invoked ${key} providing:`, arguments);
      return originalCode.apply(this, arguments);
    };
    return descriptor;
  }
}

namespace MappingType {
  // 기존 타입에서 새 타입을 만들 수 있도록 하는 것
  // keyof는 T의 프로퍼티들을 요청하는 것이고, T in을 통해 타입을 유니온 한 것과 같은 값을 얻음
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };
  interface Person {
    name: string;
    age: number;
  }
  // keyof를 통해 Person의 프로퍼티 목록을 가져옴 (인덱스 타입 쿼리)
  type propNames = keyof Person;
  // 실질적으로 타입을 얻고 싶다면, Person[propNames]로 가져와야 함 (string | number)
  type propTypes = Person[propNames];

  interface ReadOnlyPerson {
    name: string;
    age: number;
  }
  const worker: Readonly<ReadOnlyPerson> = { name: 'NoHack', age: 29 };

  const persons: Person[] = [
    { name: 'John', age: 32 },
    { name: 'Mary', age: 33 },
  ];

  // P는 T의 프로퍼티 목록의 유니온
  function filterBy<T, P extends keyof T>(
    property: P,
    value: T[P],
    array: T[]
  ) {
    return array.filter((item) => item[property] === value);
  }

  type Modifiable<T> = {
    -readonly [P in keyof T]: T[P];
  };

  // Partial은 옵셔널로 만드는 커스텀 타입
  // Required는 필수로 만드는 커스텀 타입
  type CustomPartial<T> = {
    [P in keyof T]?: T[P];
  };
  type CustomRequired<T> = {
    [P in keyof T]-?: T[P];
  };
  const partialPerson: CustomPartial<Person> = { name: 'ho' };
  const worker1: CustomPartial<ReadOnly<Person>> = { age: 20 };

  interface Person2 {
    name: string;
    age: number;
    address: string;
  }
  type CustomPick<T, K extends keyof T> = {
    [P in K]: T[P];
  };
  type PersonNameAddress = CustomPick<Person2, 'name' | 'address'>;

  class Product {
    consturctor(id: number) {}
  }
  const getProducts = function <T>(
    id?: T
  ): T extends number ? Product : Product[] {
    if (typeof id === 'number') {
      // Product 타입으로 좁힐 수가 없으므로 any로 설정
      return { id: 123 } as any;
    } else {
      return [{ id: 123 }, { id: 567 }] as any;
    }
  };
  const result1 = getProducts(123);
  const result2 = getProducts();
  console.log(result1, result2);

  type CustomExlude<T, U> = T extends U ? never : T;
  type RemoveProps<T, K> = CustomExlude<keyof T, K>;
  type RemainingProps = RemoveProps<Person, 'name' | 'age'>;
  type PersonBlindAuditions = Pick<Person, RemainingProps>;
}

namespace inferKeyword {
  interface SyncService {
    baseUrl: string;
    getA(): string;
  }

  type ReturnPromise<T> = T extends (...args: infer A) => infer R
    ? (...args: A) => Promise<R>
    : T;
  type Promisify<T> = {
    [P in keyof T]: ReturnPromise<T[P]>;
  };

  class AsyncService implements Promisify<SyncService> {
    baseUrl: string;
    getA(): Promise<string> {
      return Promise.resolve('');
    }
  }

  let service = new AsyncService();
  service.getA();
}
