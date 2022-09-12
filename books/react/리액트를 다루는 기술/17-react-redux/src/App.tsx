import React from "react";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";

interface Props {}

const App = ({}: Props) => {
  return (
    <>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </>
  );
};

export default App;
