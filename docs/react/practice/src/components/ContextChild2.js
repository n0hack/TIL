import React from 'react';
import { ValueConsumer } from '../lib/ContextAPI';

const ContextChild2 = () => {
  return (
    <ValueConsumer>
      {({ state, actions }) => (
        <>
          <p>{state.title}</p>
          <button onClick={() => actions.setTitle('ㅋㅋ')}>변경</button>
        </>
      )}
    </ValueConsumer>
  );
};

export default ContextChild2;
