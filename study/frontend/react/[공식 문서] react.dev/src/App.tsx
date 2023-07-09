import { useState, useTransition } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setValue(e.target.value);
    });
  };

  return (
    <div>
      <input value={value} onChange={handleChange} />
      <h3>10,000 multiples of number: {value}</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)' }}>
        {isPending
          ? 'Loading'
          : Array.from({ length: 10000 }, (_, i) => i + 1).map((num) => <p key={num}>{num * Number(value)}</p>)}
      </div>
    </div>
  );
}

export default App;
