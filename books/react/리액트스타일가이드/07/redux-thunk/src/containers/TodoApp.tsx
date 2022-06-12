import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoInsert from "../components/TodoInsert";
import TodoList from "../components/TodoList";
import { RootState } from "../modules";
import { addTodo, removeTodo, toggleTodo } from "../modules/todos";

function TodoApp() {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const onInsert = (text: string) => dispatch(addTodo(text));
  const onToggle = (id: number) => dispatch(toggleTodo(id));
  const onRemove = (id: number) => dispatch(removeTodo(id));

  return (
    <>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </>
  );
}

export default TodoApp;
