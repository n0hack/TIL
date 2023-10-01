import { createContext, useState } from 'react';

const ColorContext = createContext({
  state: { color: 'black', subColor: 'red' },
  actions: {
    setColor: (color: string) => {},
    setSubColor: (subColor: string) => {},
  },
});

const ColorProvider = ({ children }: { children: React.ReactNode }) => {
  const [color, setColor] = useState('black');
  const [subColor, setSubColor] = useState('red');

  const value = {
    state: { color, subColor },
    actions: { setColor, setSubColor },
  };

  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>;
};

const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;
