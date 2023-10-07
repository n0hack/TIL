import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import Todos from '../components/Todos';
import { changeInput, insert, remove, toggle } from '../modules/todos';

const TodosContainer = () => {
  const { input, todos } = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={(input: string) => dispatch(changeInput(input))}
      onInsert={(input: string) => dispatch(insert(input))}
      onRemove={(id: number) => dispatch(remove(id))}
      onToggle={(id: number) => dispatch(toggle(id))}
    />
  );
};

export default TodosContainer;
