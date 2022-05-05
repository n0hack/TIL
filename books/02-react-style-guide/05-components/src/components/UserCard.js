import React from 'react';

const UserCard = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <button onClick={props.onClickFunction}>Click Me!</button>
    </div>
  );
};

export default UserCard;
