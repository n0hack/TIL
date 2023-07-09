import counter from './counter';

const Singleton = () => {
  return (
    <div>
      <button onClick={() => counter.decrement()}>-1</button>
      <span>{counter.getCount()}</span>
      <button onClick={() => counter.increment()}>+1</button>
    </div>
  );
};

export default Singleton;
