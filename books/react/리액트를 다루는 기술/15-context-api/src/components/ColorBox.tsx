import React from "react";
import ColorContext from "../context/Color";

interface Props {}

const ColorBox = ({}: Props) => {
  return (
    <ColorContext.Consumer>
      {(value) => (
        <>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: value.state.color,
            }}
          />
          <div
            style={{
              width: "32px",
              height: "32px",
              background: value.state.subColor,
            }}
          />
        </>
      )}
    </ColorContext.Consumer>
  );
};

export default ColorBox;
