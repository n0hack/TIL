import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  // 단순 입력만 하는 것
  const handleChange = useCallback((e) => setValue(e.target.value), []);

  const handleSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');

      // 새로고침 방지
      e.preventDefault();
    },
    [value, onInsert]
  );

  return (
    <form className="TodoInsert" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={handleChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
