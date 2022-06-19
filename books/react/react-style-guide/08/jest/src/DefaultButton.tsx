import React from "react";

type Props = {
  label: string;
  onClick: () => void;
};

function DefaultButton({ label, onClick }: Props) {
  return <button onClick={onClick}>{label}</button>;
}

export default DefaultButton;
