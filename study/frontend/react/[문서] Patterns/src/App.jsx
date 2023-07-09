import Singleton from './patterns/design/Singletone/Singletone';
import Counter from './patterns/design/Singletone/counter';

function App() {
  console.log('App:', Counter.getCount());

  return <Singleton />;
}

export default App;
