import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Todos from "../components/Todos";
import { AppDispath, RootState } from "../modules";
import { changeInput, insert, remove, toggle } from "../modules/todos";

interface Props {}

const TodosContainer = ({}: Props) => {
  const { input, todos } = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch<AppDispath>();

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={(input) => dispatch(changeInput(input))}
      onInsert={(text) => dispatch(insert(text))}
      onToggle={(id) => {
        dispatch(toggle(id));
      }}
      onRemove={(id) => {
        dispatch(remove(id));
      }}
    />
  );
};

export default React.memo(TodosContainer);
