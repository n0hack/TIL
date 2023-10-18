import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { trpc } from './trpc';

function App() {
  const fetchUser = async () => {
    const user = await trpc.user.getUserById.query('0');
    console.log(user);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return <></>;
}

export default App;
