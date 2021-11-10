import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';
import Profiles from './Profiles';

const VeloApp = () => {
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
          <Link to="/profiles">프로필</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles" element={<Profiles />}>
          <Route path=":username" element={<Profile />} />
        </Route>
        <Route
          path="*"
          element={<div>라우트가 연결되지 않은 페이지입니다.</div>}
        ></Route>
      </Routes>
    </div>
  );
};

export default VeloApp;
