import counter from './counter';

const MinusButton = () => {
  return <button onClick={() => counter.decrement()}>-</button>;
};

export default MinusButton;
