import React from "react";
import { Todo } from "../modules/todos";
import TodoItem from "./TodoItem";

interface Props {
  input: string;
  todos: Todo[];
  onChangeInput: (input: string) => void;
  onInsert: (text: string) => void;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onRemove,
  onToggle,
}: Props) => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => onChangeInput(e.target.value)}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
