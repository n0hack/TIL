import React from 'react';

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface Props {
  todo: Todo;
  onToggle?: (id: number) => void;
  onRemove?: (id: number) => void;
}

const TodoItem = ({ todo, onToggle, onRemove }: Props) => {
  return (
    <li>
      <span
        style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
        onClick={() => onToggle?.(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => onRemove?.(todo.id)}>삭제</button>
    </li>
  );
};

export default TodoItem;
