import React from 'react';

interface Props {
  name: string;
  big?: boolean;
  onHello: () => void;
  onBye: () => void;
}

const Hello = ({ big = false, name, onHello, onBye }: Props) => {
  return (
    <div>
      {big ? <h1>안녕하세요, {name}</h1> : <p>안녕하세요, {name}</p>}
      <div>
        <button onClick={onHello}>Hello</button>
        <button onClick={onBye}>Bye</button>
      </div>
    </div>
  );
};

export default Hello;
