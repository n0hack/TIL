import React from "react";

function HelloJsx() {
  return (
    <div>
      <p>HelloJsx</p>
      <style jsx>
        {`
          p {
            color: red;
            font-size: 24px;
          }
        `}
      </style>
    </div>
  );
}

export default HelloJsx;
