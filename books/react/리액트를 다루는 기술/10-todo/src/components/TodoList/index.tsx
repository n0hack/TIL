import TodoListItem from "@components/TodoListItem";
import React, { useCallback } from "react";
import { List, ListRowProps } from "react-virtualized";
import { ITodo } from "types/todo";
import styles from "./index.module.scss";

type Props = {
  todos: ITodo[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
};

const TodoList = ({ todos, onRemove, onToggle }: Props) => {
  const rowRenderer = useCallback(
    ({ key, index, style }: ListRowProps) => {
      const todo = todos[index];
      return <TodoListItem todo={todo} key={key} onRemove={onRemove} onToggle={onToggle} style={style} />;
    },
    [onRemove, onToggle, todos]
  );

  return <List className={styles.TodoList} width={512} height={513} rowCount={todos.length} rowHeight={57} rowRenderer={rowRenderer} style={{ outline: "none" }} />;
};

export default TodoList;
