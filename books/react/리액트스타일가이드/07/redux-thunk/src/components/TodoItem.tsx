import React, { CSSProperties } from "react";
import { Todo } from "../modules/todos";

type Props = {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

function TodoItem({ todo, onToggle, onRemove }: Props) {
  const textStyle: CSSProperties = {
    textDecoration: todo.done ? "line-through" : "none",
  };
  const removeStyle: CSSProperties = {
    marginLeft: 8,
    color: "red",
  };

  const handleToggle = () => onToggle(todo.id);
  const handleRemove = () => onRemove(todo.id);

  return (
    <li>
      <span onClick={handleToggle} style={textStyle}>
        {todo.text}
      </span>
      <span onClick={handleRemove} style={removeStyle}>
        (X)
      </span>
    </li>
  );
}

export default TodoItem;
