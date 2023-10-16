import logo from './logo.svg';
import './App.css';
import ProxyComponent from './patterns/ProxyComponent';
import ObserverComponent from './patterns/ObserverComponent';
import RenderPropsComponent from './patterns/RenderPropsComponent';
import Flyout from './patterns/CompoundComponent/Flyout';

function App() {
  return (
    <div className="App">
      <Flyout>
        <Flyout.Toggle />
        <Flyout.List>
          <Flyout.Item>Item1</Flyout.Item>
          <Flyout.Item>Item2</Flyout.Item>
        </Flyout.List>
      </Flyout>
    </div>
  );
}

export default App;
