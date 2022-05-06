import React from 'react';
import { connect } from '../../node_modules/react-redux/es/exports';

const VisibleTodoList = ({ todos, dispatch }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default connect((state) => {
  if (state.visible === 'INACTIVE') {
    return { todos: state.todos.filter((todo) => todo.completed === false) };
  } else if (state.visible === 'ACTIVE') {
    return { todos: state.todos.filter((todo) => todo.completed === true) };
  } else {
    return { todos: state.todos };
  }
})(VisibleTodoList);
