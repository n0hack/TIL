import React from 'react';
import Todos from '../components/Todos';
import { connect } from 'react-redux';
import { changeInput, insert, remove, toggle } from '../modules/todos';

const ContainerTodos = ({
  input,
  todos,
  changeInput,
  insert,
  remove,
  toggle,
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onRemove={remove}
      onToggle={toggle}
    />
  );
};

export default connect(
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    changeInput,
    insert,
    remove,
    toggle,
  }
)(ContainerTodos);
