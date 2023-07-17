import React, { useEffect } from 'react';

const Favoraites = () => {
  useEffect(() => {
    document.title = 'Favoraites — Notedly';
  }, []);

  return (
    <div>
      <h1>Notedly</h1>
      <p>These are my favoraites</p>
    </div>
  );
};

export default Favoraites;
