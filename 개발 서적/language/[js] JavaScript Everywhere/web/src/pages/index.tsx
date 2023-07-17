import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Favoraites from './Favoraites';
import MyNotes from './MyNotes';

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mynotes" element={<MyNotes />} />
      <Route path="/favorites" element={<Favoraites />} />
    </Routes>
  );
};

export default Index;
