import Singleton from './patterns/design/Singletone/Singletone';
import Counter from './patterns/design/Singletone/counter';

function App() {
  console.log('App:', Counter.getCount());

  return (
    <>
      <Singleton />
      <button onClick={() => window.alert(Counter.getCount())}>값 확인</button>
    </>
  );
}

export default App;
