import ControllerButton from './components/ControllerButton';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import VisibleTodoList from './components/VisibleTodoList';

function App() {
  return (
    <div className="App">
      <TodoInput />
      <TodoList />
      <ControllerButton />
      <VisibleTodoList />
    </div>
  );
}

export default App;
