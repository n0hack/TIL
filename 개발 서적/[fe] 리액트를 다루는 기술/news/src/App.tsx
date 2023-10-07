import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NewsList from './components/NewsList';
import Categories, { CategoryName } from './components/Categories';

function App() {
  const [category, setCategory] = useState<CategoryName>('all');
  const onSelect = useCallback((category: CategoryName) => setCategory(category), []);

  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
}

export default App;
