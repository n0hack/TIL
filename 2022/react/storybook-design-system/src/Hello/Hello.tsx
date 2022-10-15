import React from 'react';

interface Props {
  name: string;
  big?: boolean;
  onClick?: () => void;
}

const Hello = ({ big, name, onClick }: Props) => {
  return (
    <div>
      {big ? <h1>안녕하세요, {name}</h1> : <p>안녕하세요, {name}</p>}
      <div>
        <button onClick={onClick}>Click Me</button>
      </div>
    </div>
  );
};

export default Hello;
