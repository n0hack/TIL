import { useRef } from 'react';
import './App.css';
import ScrollBox from './ScrollBox';
import ValidationSample from './ValidationSample';

function App() {
  const scrollBox = useRef();

  return (
    <>
      <ScrollBox ref={scrollBox} />
      <button onClick={() => scrollBox.current.scrollToBottom()}>
        맨 아래로
      </button>
    </>
  );
}

export default App;
