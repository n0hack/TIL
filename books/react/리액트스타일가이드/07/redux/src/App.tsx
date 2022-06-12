import React from "react";
import { useState } from "react";
import { RootState } from "./modules";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, IState, removeTodo, toggleTodo } from "./modules/todos";

function App() {
  const todos: IState = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.currentTarget.value);
  const handleClick = () => dispatch(addTodo(text));
  const handleCheck = (id: number) => dispatch(toggleTodo(id));
  const handleRemove = (id: number) => dispatch(removeTodo(id));

  return (
    <div>
      <h1>Todo</h1>
      <input value={text} onChange={handleChange} type="text" />
      <button onClick={handleClick}>추가</button>
      <hr />
      <ul>
        {todos.todos.map((todo) => (
          <li key={todo.id}>
            <span onClick={() => handleRemove(todo.id)}>{todo.text}</span>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheck(todo.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
