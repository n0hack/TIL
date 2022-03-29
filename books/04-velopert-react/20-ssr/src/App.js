import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import BluePage from './pages/BluePage';
import RedPage from './pages/RedPage';

function App() {
  return (
    <div className="App">
      <Menu />
      <hr />
      <Routes>
        <Route path="/red" element={<RedPage />} />
        <Route path="/blue" element={<BluePage />} />
      </Routes>
    </div>
  );
}

export default App;
