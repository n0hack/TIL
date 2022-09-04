import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from "react-icons/md";
import { ITodo } from "types/todo";
import styles from "./index.module.scss";
import cn from "classnames";

type Props = {
  todo: ITodo;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
};

const TodoListItem = ({ todo, onRemove, onToggle }: Props) => {
  const { id, text, checked } = todo;

  return (
    <div className={styles.TodoListItem}>
      <div className={cn(styles.checkbox, checked ? styles.checked : "")} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className={styles.text}>{text}</div>
      </div>
      <div className={styles.remove} onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
