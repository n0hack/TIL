import React from 'react';

const LinkButton = ({ url, label }) => {
  return (
    <div>
      <a href={url}>{label}</a>
    </div>
  );
};

export default LinkButton;
