import { createContext, useState } from "react";

interface IColorContext {
  state: { color: string; subColor: string };
  actions: {
    setColor: React.Dispatch<React.SetStateAction<string>>;
    setSubColor: React.Dispatch<React.SetStateAction<string>>;
  };
}

const ColorContext = createContext<IColorContext>({
  state: { color: "black", subColor: "red" },
  actions: {
    setColor: () => {},
    setSubColor: () => {},
  },
});

const ColorProvider = ({ children }: { children: React.ReactNode }) => {
  const [color, setColor] = useState("black");
  const [subColor, setSubColor] = useState("red");

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
