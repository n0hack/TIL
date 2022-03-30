import { createContext, useState } from 'react';

const ValueContext = createContext({
  state: { title: '' },
  actions: { setTitle: () => {} },
});

const ValueProvider = ({ children }) => {
  const [title, setTitle] = useState('test');

  const value = {
    state: { title },
    actions: { setTitle },
  };

  return (
    <ValueContext.Provider value={value}>{children}</ValueContext.Provider>
  );
};

const { Consumer: ValueConsumer } = ValueContext;

export { ValueProvider, ValueConsumer };
export default ValueContext;
