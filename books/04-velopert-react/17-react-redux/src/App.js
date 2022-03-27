import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';
import TodosContainerHook from './containers/TodosContainerHook';

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainerHook />
    </div>
  );
}

export default App;
