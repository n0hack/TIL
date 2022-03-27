import { useCallback, useState } from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import { Routes, Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

export default function App() {
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <Routes>
      <Route path="/" element={<NewsPage />}>
        <Route path=":category" element={<NewsPage />} />
      </Route>
    </Routes>
    // <>
    //   <Categories category={category} onSelect={onSelect} />
    //   <NewsList category={category} />
    // </>
  );
}
