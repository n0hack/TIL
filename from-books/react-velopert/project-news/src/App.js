import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />}>
        <Route path=":category" element={<NewsPage />} />
      </Route>
    </Routes>
  );
};

export default App;

// import './App.css';
// import NewsList from './components/NewsList';
// import Categories from './components/Categories';
// import { useCallback, useState } from 'react';

// function App() {
//   const [category, setCategory] = useState('all');
//   const handleSelect = useCallback((category) => setCategory(category), []);

//   return (
//     <>
//       <Categories category={category} onSelect={handleSelect} />
//       <NewsList category={category} />
//     </>
//   );
// }

// export default App;
