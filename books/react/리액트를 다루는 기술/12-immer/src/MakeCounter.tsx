import React, { useState } from "react";

export interface WrappedProps {
  value: number;
  isBlack: boolean;
  onClick: () => void;
}

interface CounterProps {
  defaultValue: number;
}

const MakeCounter = <P extends WrappedProps>(WrappedComponent: React.ComponentType<P>): React.FC<CounterProps & Omit<P, keyof WrappedProps>> => {
  const CounterComponent = ({ defaultValue, ...props }: CounterProps) => {
    const [value, setValue] = useState(defaultValue);
    const [colorOption, setColorOption] = useState(true);

    const onClick = () => setColorOption(!colorOption);

    const increment = () => setValue(value + 1);
    const decrement = () => setValue(value - 1);

    return (
      <div>
        <WrappedComponent {...(props as P)} value={value} isBlack={colorOption} onClick={onClick} />
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    );
  };

  return CounterComponent;
};

export default MakeCounter;
