import { signal } from '@preact/signals-react';

const count = signal(10);

const Counter = () => {
  console.log('Counter rendered');
  const value = count.value;

  return (
    <div>
      <p>Count: {value}</p>
      <button onClick={() => count.value++}>Click</button>
    </div>
  );
};

export default Counter;
