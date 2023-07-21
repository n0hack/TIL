import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Favoraites from './Favoraites';
import MyNotes from './MyNotes';
import NotePage from './NotePage';
import SignupPage from './SignupPage';

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mynotes" element={<MyNotes />} />
      <Route path="/favorites" element={<Favoraites />} />
      <Route path="/note/:id" element={<NotePage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
};

export default Index;
