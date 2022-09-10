import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<NewsPage />} />
        <Route path=":category" element={<NewsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
