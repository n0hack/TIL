import React from "react";

interface Props {}

const Sample = ({}: Props) => {
  return (
    <div>
      <img
        src="/hakase.jpeg"
        alt="hakase"
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <br />
      <input />
    </div>
  );
};

export default Sample;
