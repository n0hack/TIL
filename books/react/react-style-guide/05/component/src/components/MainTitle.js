import React from "react";

function MainTitle(props) {
  return (
    <h2>
      <a href={props.url}>{props.text}</a>
    </h2>
  );
}

export default MainTitle;
