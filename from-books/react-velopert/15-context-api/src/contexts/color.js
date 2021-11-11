import { createContext, useState } from 'react';

// 전역에서 관리할 컨텍스트 생성
// 컨텍스트는 상태 외에 함수를 가질 수도 있음
const ColorContext = createContext({
  state: { color: 'black', subColor: 'red' },
  actions: {
    setColor: () => {},
    setSubColor: () => {},
  },
});

// 이렇게 만들면 동적으로 관리 가능
const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');
  const [subColor, setSubColor] = useState('red');

  const value = {
    state: { color, subColor },
    actions: { setColor, setSubColor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };
export default ColorContext;
