import React, { useEffect, useReducer, useState } from 'react';
import useInputs from './useInputs';

function reducer(state, action) {
  console.log(action);
  return { ...state, [action.name]: action.value };
}

const Info = () => {
  // const [name, setName] = useState('');
  // const [nickname, setNickname] = useState('');

  // 디스패치 장점은 업데이트 로직을 바깥에 둘 수 있는 것
  // 좀 더 다양한 액션을 둘 수 있는 것
  // const [state, dispatch] = useReducer(reducer, { name: '', nickname: '' });

  // const onChange = (e) => {
  //   dispatch(e.target);
  // };

  // Custom Hook
  const [state, dispatch] = useInputs({ name: '', nickname: '' });

  return (
    <div>
      <div>
        <input value={state.name} name="name" onChange={dispatch} />
        <input value={state.nickname} name="nickname" onChange={dispatch} />
      </div>
      <div>
        <div>
          <b>이름: </b>
          {state.name}
        </div>
        <div>
          <b>닉네임: </b>
          {state.nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
