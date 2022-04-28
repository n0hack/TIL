function getProducts<T>(id?: T): T extends number ? Product : Product[] {
  if (typeof id === 'number') {
    return { id: 123 } as any;
  } else {
    return [{ id: 123 }, { id: 567 }] as any;
  }
}

class Product {
  id: number;
}

const result1 = getProducts(123);
const result2 = getProducts();
console.log(result1);
console.log(result2);

class Person {
  id: number;
  name: string;
  age: number;
}

type RemoveProps<T, K> = Exclude<keyof T, K>;
type RemainingProps = RemoveProps<Person, 'name' | 'age'>;
type PersonBlindAuditions = Pick<Person, RemainingProps>;
const p: PersonBlindAuditions = { id: 123 };

// 반환 타입을 찾아 다른 타입으로 변환하기
type ReturnPromise<T> = T extends (...args: infer A) => infer R
  ? (...args: A) => Promise<R>
  : T;

type Promisify<T> = {
  [P in keyof T]: ReturnPromise<T[P]>;
};

interface SyncService {
  baseUrl: string;
  getA(): string;
}

class ASyncService implements Promisify<SyncService> {
  baseUrl: string;
  getA(): Promise<string> {
    return Promise.resolve('');
  }
}

let service = new ASyncService();
let result = service.getA();
