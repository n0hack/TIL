import { useState } from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import LifeCycleSample from './LifeCycleSample';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function App() {
  const [color, setColor] = useState('#000000');
  const handleClick = () => setColor(getRandomColor());
  return (
    <>
      <button onClick={handleClick}>랜덤색상</button>
      <ErrorBoundary>
        <LifeCycleSample color={color} />
      </ErrorBoundary>
    </>
  );
}

export default App;
