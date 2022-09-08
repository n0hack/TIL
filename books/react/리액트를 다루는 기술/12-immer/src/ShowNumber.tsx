import React from "react";
import MakeCounter, { WrappedProps } from "./MakeCounter";

interface ShowNumberProps extends WrappedProps {
  label: string;
}

const ShowNumber = ({ value, isBlack, onClick, label }: ShowNumberProps) => {
  const color = isBlack ? "black" : "green";
  return (
    <div style={{ color }} onClick={onClick}>
      <span>{label}</span>
      {value}
    </div>
  );
};

export default MakeCounter(ShowNumber);
