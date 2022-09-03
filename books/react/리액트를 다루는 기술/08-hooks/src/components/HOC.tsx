import React, { useState } from "react";

type CounterProps = {
  defaultValue: number;
};

const MakeCounter = <P extends WrappedProps>(WrappedComponent: React.ComponentType<P>): React.FC<CounterProps & Omit<P, keyof WrappedProps>> => {
  const CounterComponent = ({ defaultValue, ...props }: CounterProps) => {
    const [value, setValue] = useState(defaultValue);
    const [colorOption, setColorOption] = useState(true);

    const onClick = () => setColorOption(!colorOption);
    const increment = () => setValue(value + 1);
    const decrement = () => setValue(value - 1);

    return (
      <div>
        <WrappedComponent {...(props as P)} value={value} inBlack={colorOption} onClick={onClick} />
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
    );
  };

  return CounterComponent;
};

type WrappedProps = {
  value: number;
  isBlack: boolean;
  onClick: () => void;
};

type ShowNumberProps = WrappedProps & {
  label: string;
};

const ShowNumber = ({ label, value, isBlack, onClick }: ShowNumberProps) => {
  const color = isBlack ? "black" : "green";
  return (
    <div style={{ color }} onClick={onClick}>
      {value}
    </div>
  );
};

export default MakeCounter(ShowNumber);
