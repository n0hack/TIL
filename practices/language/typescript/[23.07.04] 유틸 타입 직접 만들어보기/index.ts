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

  console.log(todo1);
  console.log(todo2);
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
