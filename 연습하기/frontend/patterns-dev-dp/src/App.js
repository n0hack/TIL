import logo from './logo.svg';
import './App.css';
import ProxyComponent from './patterns/ProxyComponent';
import ObserverComponent from './patterns/ObserverComponent';
import RenderPropsComponent from './patterns/RenderPropsComponent';

function App() {
  return (
    <div className="App">
      <RenderPropsComponent>{({ data }) => <div>hi {data}</div>}</RenderPropsComponent>
    </div>
  );
}

export default App;
