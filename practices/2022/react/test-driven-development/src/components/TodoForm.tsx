import React from 'react';

interface Props {}

const TodoForm = ({}: Props) => {
  return (
    <form>
      <input placeholder="할 일을 입력하세요" />
      <button>등록</button>
    </form>
  );
};

export default TodoForm;
