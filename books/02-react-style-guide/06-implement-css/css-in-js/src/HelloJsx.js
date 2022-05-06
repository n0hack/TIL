import React from 'react';
import styles, { button } from './styles';

const HelloJsx = () => {
  return (
    <div>
      <p>Hello World!</p>
      <button>Click Me</button>
      <style jsx>{styles}</style>
      <style jsx>{button}</style>
    </div>
  );
};

export default HelloJsx;
