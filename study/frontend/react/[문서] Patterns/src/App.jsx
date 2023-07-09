import './App.css';
import withTest from './patterns/design/HOC/withTest';
import Observer from './patterns/design/Observer/Observer';

function App() {
  return <Observer />;
}

export default withTest(App);
