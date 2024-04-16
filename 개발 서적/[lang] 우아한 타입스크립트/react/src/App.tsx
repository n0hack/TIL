import { useState } from 'react';
import Select from './components/Select';

const fruits = {
  apple: '사과',
  banana: '바나나',
  blueberry: '블루베리',
};

export type Fruit = keyof typeof fruits;

function App() {
  const [fruit, setFruit] = useState<Fruit | undefined>();

  return (
    <>
      <Select onChange={setFruit} options={fruits} selectedOption={fruit} />
    </>
  );
}

export default App;
