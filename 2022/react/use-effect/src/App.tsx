import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList, { Todo } from "./components/TodoList";

const todos: Todo[] = [
  { id: 1, title: "1번 할 일", done: true },
  { id: 2, title: "2번 할 일", done: true },
  { id: 3, title: "3번 할 일", done: false },
];

function App() {
  return (
    <TodoList
      todos={todos}
      filter={(todo: Todo) => {
        return todo.done;
      }}
    />
  );
}

export default App;
