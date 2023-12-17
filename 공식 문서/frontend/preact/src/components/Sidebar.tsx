import React from 'react';

const Sidebar = () => {
  console.log('Render Sidebar');

  return (
    <nav className="sidebar">
      <a href="/link-1">Link 1</a>
      <a href="/link-2">Link 2</a>
      <a href="/link-3">Link 3</a>
      <a href="/link-4">Link 4</a>
    </nav>
  );
};

export { Sidebar };
