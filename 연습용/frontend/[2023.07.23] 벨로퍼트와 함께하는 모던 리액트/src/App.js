import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import User from './components/User';
import useCounter from './hooks/useCounter';
import ErrorComponent from './components/ErrorComponent';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const user = {
    id: 1,
    username: 'lucid',
  };

  return (
    <div className="App">
      <Counter />
      <ErrorBoundary>
        <User />
      </ErrorBoundary>
    </div>
  );
}

export default App;
