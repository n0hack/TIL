import React from "react";
import { Todo } from "../modules/todos";

interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoItem = ({ todo, onRemove, onToggle }: Props) => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
      />
      <span>{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};

export default TodoItem;
