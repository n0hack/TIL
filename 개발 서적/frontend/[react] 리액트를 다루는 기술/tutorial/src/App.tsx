import React from 'react';
import { useInputs } from './hooks/useInputs';
import { SassComponent } from './components/SassComponent';
import Immer from './components/Immer';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';

const App = () => {
  const [state, onChange] = useInputs({ name: '', nickname: '' });

  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/lucid">루시드</Link>
        </li>
        <li>
          <Link to="/profile/gildong">홍길동</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
