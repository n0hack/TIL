import React from "react";

function PrimaryButton({ handleClick, label }) {
  return <button onClick={handleClick}>{label}</button>;
}

export default PrimaryButton;
