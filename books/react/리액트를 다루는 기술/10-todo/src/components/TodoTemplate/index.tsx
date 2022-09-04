import React from "react";
import styles from "./index.module.scss";

type Props = {
  children: React.ReactNode;
};

const TodoTemplate = ({ children }: Props) => {
  return (
    <div className={styles.TodoTemplate}>
      <div className={styles["app-title"]}>일정 관리</div>
      <div className={styles["content"]}>{children}</div>
    </div>
  );
};

export default TodoTemplate;
