import React, { useMemo } from "react";

type Props = {
  todos: Todo[];
  filter: (todo: Todo) => boolean;
};

export type Todo = { id: number; title: string; done: boolean };

function getFilteredTodos(todos: Todo[], filter: (todo: Todo) => boolean) {
  const newTodos = [];
  for (const todo of todos) {
    if (filter(todo)) newTodos.push(todo);
  }
  return newTodos;
}

const TodoList = ({ todos, filter }: Props) => {
  const visibleTodos = useMemo(() => getFilteredTodos(todos, filter), [filter, todos]);
  console.log(visibleTodos);
  return (
    <ul>
      {visibleTodos.map((todo) => (
        <li key={todo.id}>
          {todo.title} ({todo.done + ""})
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
