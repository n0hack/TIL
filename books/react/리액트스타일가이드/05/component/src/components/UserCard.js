import React from "react";

const UserCard = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <button onClick={props.onClickFunction}>Click me</button>
    </div>
  );
};

export default UserCard;
