import React, { useReducer } from 'react';

function reducer(state, action) {
  return { ...state, [action.name]: action.value };
}

const InfoReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: '',
  });
  const { name, nickname } = state;

  const handleChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input type="text" name="name" value={name} onChange={handleChange} />
        <input
          type="text"
          name="nickname"
          value={nickname}
          onChange={handleChange}
        />
      </div>
      <div>
        <b>이름: </b>
        {name}
        <br />
        <b>닉네임: </b>
        {nickname}
      </div>
    </div>
  );
};

export default InfoReducer;
