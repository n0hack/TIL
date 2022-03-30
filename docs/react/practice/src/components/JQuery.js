import React from 'react';
import $ from 'jquery';

const JQuery = () => {
  const inputAlert = (e) => {
    const value = $('.input').val();
    alert(value);
  };

  return (
    <div>
      <h2>This is JQuery</h2>
      <input type="text" className="input" />
      <button onClick={(e) => inputAlert(e)}>클릭</button>
    </div>
  );
};

export default JQuery;
