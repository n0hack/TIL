import React from "react";
import PrimaryButton from "./PrimaryButton";

function CardPreset(props) {
  return (
    <div>
      <p>{props.name}</p>
      <PrimaryButton label={props.linkLabel} handleClick={props.handleClick} />
    </div>
  );
}

export default CardPreset;
