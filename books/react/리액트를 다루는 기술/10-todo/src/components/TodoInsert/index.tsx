import React, { useCallback, useState } from "react";
import styles from "./index.module.scss";
import { MdAdd } from "react-icons/md";

type Props = {
  onInsert: (text: string) => void;
};

const TodoInsert = ({ onInsert }: Props) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onInsert(value);
      setValue("");
    },
    [onInsert, value]
  );

  return (
    <form className={styles.TodoInsert} onSubmit={onSubmit}>
      <input placeholder="할 일을 입력하세요" value={value} onChange={onChange} />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
