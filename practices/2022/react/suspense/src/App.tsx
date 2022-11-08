import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import LoadingSpinner from './components/LoadingSpinner';
import { useQuery } from 'react-query';
import axios from 'axios';

function App() {
  const { data } = useQuery(
    'test',
    () => {
      return axios.get<{ id: number; name: string }[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
    },
    {
      cacheTime: 0,
    }
  );

  return (
    <div className="App">
      <div>리액트 서스펜스</div>
      <Suspense fallback={<LoadingSpinner />}>
        {data?.data.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </Suspense>
    </div>
  );
}

export default App;
