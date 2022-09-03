import React, { useEffect, useMemo, useState } from "react";

type Props = {
  todos: Todo[];
  filter: (todo: Todo) => boolean;
};

export type Todo = {
  id: number;
  title: string;
  done: boolean;
};

const getFilteredTodos = (todos: Todo[], filter: (todo: Todo) => boolean): Todo[] => {
  return todos.filter(filter);
};

const TodoItem = (todo: Todo) => {
  return (
    <li>
      {todo.title} ({todo.done + ""})
    </li>
  );
};

const TodoList = ({ todos, filter }: Props) => {
  const [newTodo, setNewTodo] = useState("");
  const visibleTodos = useMemo(() => getFilteredTodos(todos, filter), [filter, todos]);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
