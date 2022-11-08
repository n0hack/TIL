import React, { useCallback, useRef, useState } from 'react';
import TodoForm from './TodoForm';
import { Todo } from './TodoItem';
import TodoList from './TodoList';

interface Props {}

const TodoApp = ({}: Props) => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      text: 'TDD 배우기',
      done: true,
    },
    {
      id: 2,
      text: '@testing-library/react 사용하기',
      done: true,
    },
  ]);
  const nextId = useRef(3);

  const onInsert = useCallback((text: string) => {
    setTodos((todos) =>
      todos.concat({ id: nextId.current, text, done: false })
    );
    nextId.current += 1;
  }, []);

  const onToggle = useCallback((id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }, []);

  const onRemove = useCallback((id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <>
      <TodoForm data-testid="helloworld" onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </>
  );
};

export default TodoApp;
