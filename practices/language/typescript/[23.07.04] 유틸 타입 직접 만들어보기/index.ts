// Partial<Type>
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
