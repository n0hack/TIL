import TodoListItem from "@components/TodoListItem";
import React from "react";
import { ITodo } from "types/todo";
import styles from "./index.module.scss";

type Props = {
  todos: ITodo[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
};

const TodoList = ({ todos, onRemove, onToggle }: Props) => {
  return (
    <div className={styles.TodoList}>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TodoList;
