// Partial<Type>: 모든 프로퍼티를 옵셔널하게 만들어주는 유틸리티 타입
namespace Partial {
  type MyPartial<T> = {
    [P in keyof T]?: T[P];
  };

  interface Todo {
    title: string;
    description: string;
  }

  const updateTodo = (todo: Todo, fieldsToUpdate: MyPartial<Todo>) => {
    return { ...todo, ...fieldsToUpdate };
  };

  const todo1 = {
    title: 'organize desk',
    description: 'clear clutter',
  };

  const todo2 = updateTodo(todo1, {
    description: 'throw out trash',
  });
}

// Required<Type>: 모든 프로퍼티를 필수로 만들어주는 유틸리티 타입
namespace Required {
  type MyRequired<T> = {
    [P in keyof T]-?: T[P];
  };

  interface Props {
    a?: number;
    b?: string;
  }

  const obj: Props = { a: 5 };
  const obj2: MyRequired<Props> = { a: 5, b: 'hello' };
}

// Readonly<Type>: 모든 프로퍼티를 readonly로 만들어주는 유틸리티 타입
namespace Readonly {
  type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
  };

  interface Todo {
    title: string;
  }

  const todo: MyReadonly<Todo> = {
    title: 'Delete inactive users',
  };
}

// Record<Keys, Type>: 주어진 Keys의 값을 토대로 객체를 만들어주는 유틸리티 타입
namespace Record {
  type MyRecord<K extends string | number | symbol, T> = {
    [P in K]: T;
  };

  interface PageInfo {
    title: string;
  }

  type Page = 'home' | 'about' | 'contact';

  const nav: MyRecord<Page, PageInfo> = {
    home: { title: 'home' },
    about: { title: 'about' },
    contact: { title: 'contact' },
  };
}

// Pick<Type, Keys>: 주어진 Keys에 해당하는 프로퍼티만 뽑아서 타입을 만들어주는 유틸리티 타입
namespace Pick {
  type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  type Todo = {
    title: string;
    description: string;
    completed: boolean;
  };

  type TodoPreview = MyPick<Todo, 'title' | 'completed'>;

  const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
  };
}

// Exclude<Type, ExcludedUnion>: 주어진 타입에서 ExcludedUnion에 해당하는 타입을 제외한 타입을 만들어주는 유틸리티 타입
namespace Exclude {
  type MyExclude<T, U> = T extends U ? never : T;

  type T0 = MyExclude<'a' | 'b' | 'c', 'a'>;
}

// Omit<Type, Keys>: 주어진 Keys에 해당하는 프로퍼티를 제외한 타입을 만들어주는 유틸리티 타입
namespace Omit {
  type MyOmit<T, K extends keyof T> = {
    [P in Exclude<keyof T, K>]: T[P];
  };

  type Todo = {
    title: string;
    description: string;
    completed: boolean;
  };

  type TodoPreview = MyOmit<Todo, 'description'>;

  const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
  };
}

// Extract<Type, Union>: 주어진 타입에서 Union에 해당하는 타입을 추출해주는 유틸리티 타입
namespace Extract {
  type MyExtract<T, U> = T extends U ? T : never;

  type T0 = MyExtract<'a' | 'b' | 'c', 'a' | 'f'>;
  type T1 = MyExtract<string | number | (() => void), Function>;
}

// NonNullable<Type>: 주어진 타입에서 null과 undefined를 제외한 타입을 만들어주는 유틸리티 타입
namespace NonNullable {
  type MyNonNullable<T> = T & {};

  type T0 = MyNonNullable<string | number | undefined>;
  type T1 = MyNonNullable<string[] | null | undefined>;
}

// Parameters<Type>: 함수의 파라미터 타입을 튜플로 만들어주는 유틸리티 타입
namespace Parameters {
  type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;

  declare function f1(arg: { a: number; b: string }): void;

  type T0 = MyParameters<() => string>;
  type T1 = MyParameters<(s: string) => void>;
  type T2 = MyParameters<<T>(arg: T) => T>;
  type T3 = MyParameters<typeof f1>;
  type T4 = MyParameters<any>;
  type T5 = MyParameters<never>;
}
