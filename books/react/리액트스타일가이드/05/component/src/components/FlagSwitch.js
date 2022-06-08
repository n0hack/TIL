import React from "react";

function FlagSwitch(props) {
  console.log(props);
  return <button onClick={props.onClick}>Switch Flag</button>;
}

export default FlagSwitch;
