namespace Generics {
  class BeeKeeper {
    hasMask = true;
  }

  class ZooKeeper {
    nametag = 'Mikle';
  }

  class Animal {
    numLegs = 4;
  }

  class Bee extends Animal {
    keeper = new BeeKeeper();
  }

  class Lion extends Animal {
    keeper = new ZooKeeper();
  }

  function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
  }
  // console.log(createInstance(Lion).keeper.nametag);
  // console.log(createInstance(Bee).keeper.hasMask);
}

namespace Keyof {
  type Point = { x: number; y: number };
  type P = keyof Point;

  type Arrayish = { [n: number]: unknown };
  type A = keyof Arrayish;

  type Mapish = { [k: string]: boolean };
  type M = keyof Mapish;
}

namespace ConditionalTypes {
  type MessageOf<T extends { message: unknown }> = T['message'];
  interface Email {
    message: string;
  }
  type EmailMessageContents = MessageOf<Email>;

  type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;
  type Str = Flatten<string[]>;

  type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
    ? Return
    : never;
  type Num = GetReturnType<() => number>;
}

namespace MappedTypes {
  type OptionsFlags<T> = {
    [P in keyof T]: boolean;
  };

  type FeatureFlags = {
    darkMode: () => void;
    newUserProfile: () => void;
  };

  type FeatureOptions = OptionsFlags<FeatureFlags>;

  // Mutable
  type CreateMutable<T> = {
    -readonly [P in keyof T]: T[P];
  };
  type LockedAccount = {
    readonly id: string;
    readonly name: string;
  };
  type UnlockedAccount = CreateMutable<LockedAccount>;

  // Concrete
  type Concrete<T> = {
    [P in keyof T]-?: T[P];
  };
  type MaybeUser = {
    id: string;
    name?: string;
    age?: number;
  };
  type User = Concrete<MaybeUser>;

  // Key Remapping
  type Getters<T> = {
    [P in keyof T as `get${Capitalize<string & P>}`]: () => T[P];
  };
  interface Person {
    name: string;
    age: number;
    location: string;
  }
  type LazyPerson = Getters<Person>;

  type EventConfig<Events extends { kind: string }> = {
    [E in Events as E['kind']]: (event: E) => void;
  };
  type SquareEvent = { kind: 'square'; x: number; y: number };
  type CircleEvent = { kind: 'circle'; radius: number };
  type Config = EventConfig<SquareEvent | CircleEvent>;
}

namespace Classes {
  class Point {
    // Private
    #length = 1;

    // 생성자에서 readonly을 붙이게 되면 자동으로 멤버 변수로 선언됨
    constructor(readonly x = 0, readonly y = 0) {}

    // Getter / Setter
    get length() {
      return this.#length;
    }

    set length(length: number) {
      this.#length = length;
    }
  }
  const p = new Point(1, 2);
  p.length = 3;
  // console.log(p.length);
}

namespace UtilityTypes {
  // await
  type A = Awaited<Promise<string>>;

  // 객체의 일부
  interface Todo {
    title: string;
    description: string;
  }
  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
  }

  // 객체 생성
  interface CatInfo {
    age: number;
    breed: string;
  }
  type CatName = 'miffy' | 'boris' | 'mordred';
  const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: 'Persian' },
    boris: { age: 5, breed: 'Main Coon' },
    mordred: { age: 16, breed: 'British Shorthair' },
  };

  // 우측 값 제외
  type T0 = Exclude<'a' | 'b', 'b'>;
}
