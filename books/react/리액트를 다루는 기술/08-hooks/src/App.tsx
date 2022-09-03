import React from "react";
import HOC from "./components/HOC";
import UseEffect, { Todo } from "./components/UseEffect";
import UseState from "./components/UseState";

const todos: Todo[] = [
  { id: 1, title: "Todo 1", done: true },
  { id: 2, title: "Todo 2", done: false },
  { id: 3, title: "Todo 3", done: false },
];

function App() {
  return (
    <>
      {/* <HOC defaultValue={1} label="Hello" /> */}
      {/* <UseState /> */}
      <UseEffect todos={todos} filter={(todo: Todo) => todo.done} />
    </>
  );
}

export default App;
