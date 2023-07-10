import './App.css';
import { FlyOut } from './patterns/design/Compound/FlyOut';
import withTest from './patterns/design/HOC/withTest';
import RenderProps from './patterns/design/RenderProps/RenderProps';

function App() {
  return (
    <FlyOut>
      <FlyOut.Toggle />
      <FlyOut.List>
        <FlyOut.Item>item1</FlyOut.Item>
        <FlyOut.Item>item2</FlyOut.Item>
      </FlyOut.List>
    </FlyOut>
  );
}

export default withTest(App);
