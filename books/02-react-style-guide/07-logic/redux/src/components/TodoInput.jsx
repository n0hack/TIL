import React, { useRef } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../actions/index';

const TodoInput = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const inputRef = useRef();
  const clickHandler = (e) => {
    dispatch(addTodo(inputRef.current.value));
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

export default TodoInput;
