import React from 'react';
import { useInputs } from './hooks/useInputs';
import { SassComponent } from './components/SassComponent';
import Immer from './components/Immer';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import ColorBox from './components/ColorBox';
import ColorContext, { ColorProvider } from './contexts/color';
import SelectColors from './components/SelectColors';

const App = () => {
  const [state, onChange] = useInputs({ name: '', nickname: '' });

  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
