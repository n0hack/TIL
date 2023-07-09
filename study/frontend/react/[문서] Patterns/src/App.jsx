import './App.css';
import withTest from './patterns/design/HOC/withTest';
import RenderProps from './patterns/design/RenderProps/RenderProps';

function App() {
  return <RenderProps />;
}

export default withTest(App);
