import Counter from './Counter';
import Todo from './Todo';

const App = () => {
  console.log('App rendered');

  return (
    <>
      <Counter />
      <Todo />
    </>
  );
};

export default App;
