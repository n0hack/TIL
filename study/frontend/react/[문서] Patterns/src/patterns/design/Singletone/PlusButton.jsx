import counter from './counter';

const PlusButton = () => {
  return <button onClick={() => counter.increment()}>+</button>;
};

export default PlusButton;
