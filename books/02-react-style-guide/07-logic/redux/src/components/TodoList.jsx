import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo } from '../actions/index';
import Todo from './Todo';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const checkTodo = (index) => dispatch(toggleTodo(index));

  return (
    <ul>
      {todos.map((todo, index) => (
        <Todo key={index} onClick={() => checkTodo(index)} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
