import React from 'react';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';
import SampleContainer from './containers/SampleContainer';

const App = () => {
  return (
    <div>
      {/* <SampleContainer /> */}
      <CounterContainer />
      <hr />
      {/* <TodosContainer /> */}
    </div>
  );
};

export default App;
