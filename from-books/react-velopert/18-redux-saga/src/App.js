import './App.css';
import ContainerCounter from './containers/ContainerCounter';
import ContainerSample from './containers/ContainerSample';
import ContainerTodos from './containers/ContainerTodos';

function App() {
  return (
    <>
      <ContainerCounter />
      <hr />
      <ContainerTodos />
      <hr />
      <ContainerSample />
    </>
  );
}

export default App;
