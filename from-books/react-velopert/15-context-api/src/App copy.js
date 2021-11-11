import './App.css';
import ColorBox from './components/ColorBox';
import SelectColors from './components/SelectColors';
import ColorContext, { ColorProvider } from './contexts/color';
import ClassSelectColor from './components/ClassSelectColor';

function App() {
  return (
    <>
      <ColorProvider>
        <ClassSelectColor />
        {/* <SelectColors /> */}
        <ColorBox />
      </ColorProvider>
    </>
  );
}

export default App;
