import MinusButton from './MinusButton';
import PlusButton from './PlusButton';
import counter from './counter';

const Singleton = () => {
  return (
    <div>
      <MinusButton />
      <PlusButton />
      <button onClick={() => window.alert(counter.getCount())}>값 확인하기</button>
    </div>
  );
};

export default Singleton;
