import React, { useState } from 'react';

interface Props {
  onInsert?: (text: string) => void;
}

const TodoForm = ({ onInsert }: Props) => {
  const [value, setValue] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onInsert?.(value);
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        onChange={onChange}
        value={value}
      />
      <button>등록</button>
    </form>
  );
};

export default TodoForm;
