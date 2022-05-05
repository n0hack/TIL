import React from 'react';

// Presentaional Component
const MainTitle = (props) => {
  return (
    <div>
      <h2>
        <a href={props.url}>{props.text}</a>
      </h2>
    </div>
  );
};

export default MainTitle;
