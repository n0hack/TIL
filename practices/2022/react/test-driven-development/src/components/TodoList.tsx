import React from 'react';
import TodoItem, { Todo } from './TodoItem';

interface Props {
  todos: Todo[];
  onToggle?: (id: number) => void;
  onRemove?: (id: number) => void;
}

const TodoList = ({ todos, onToggle, onRemove }: Props) => {
  console.log('리렌더 TodoList');
  return (
    <ul data-testid="TodoList">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
};

export default TodoList;
