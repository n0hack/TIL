import React from "react";

function LinkButton({ url, label }) {
  return (
    <div>
      <a href={url}>{label}</a>
    </div>
  );
}

export default LinkButton;
