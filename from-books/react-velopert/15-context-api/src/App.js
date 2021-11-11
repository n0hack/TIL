import './App.css';
import MyColorBox from './components/MyColorBox';
import MyColorSelect from './components/MyColorSelect';
import ColorContext, { ColorProvider } from './contexts/myColor';

function App() {
  return (
    <ColorProvider>
      <MyColorSelect />
      <MyColorBox />
    </ColorProvider>
  );
}

export default App;
