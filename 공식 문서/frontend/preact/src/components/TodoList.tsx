import React, { useState } from "react";
import { Todos } from "../App";

type Props = {
  todos: Todos;
  addTodo: (name: string) => void;
  toggleTodo: (id: string, completed: boolean) => void;
};

const TodoList = ({ todos, addTodo, toggleTodo }: Props) => {
  console.log("Render TodoList");

  const [newTodoName, setNewTodoName] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addTodo(newTodoName);
    setNewTodoName("");
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label>New Task</label>
        <input
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
          type="text"
        />
        <button>Add</button>
      </form>
      <ul>
        {todos.value.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => toggleTodo(todo.id, e.target.checked)}
              />
              {todo.name}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};

export { TodoList };
