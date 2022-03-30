import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
import CookieSave from './components/CookieSave';
import HomePage from './pages/HomePage';
import IDPage from './pages/IDPage';

function App() {
  return (
    <div className="App">
      <header>헤더</header>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/:id" element={<IDPage />}></Route>
        </Route>
      </Routes>
      <footer>푸터</footer>
    </div>
  );
}

export default App;
