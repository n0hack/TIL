import React, { useState } from 'react';
import useInput from './hooks/useInput';

const Info = () => {
  const { state, onChange } = useInput(
    { name: '', nickname: '' },
    (e) => e.target.value.length <= 10
  );
  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input type="text" name="name" value={name} onChange={onChange} />
        <input
          type="text"
          name="nickname"
          value={nickname}
          onChange={onChange}
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
  // const [form, setForm] = useState({
  //   name: '',
  //   nickname: '',
  // });
  // const { name, nickname } = form;

  // const handleChange = (e) => {
  //   const nextForm = { ...form, [e.target.name]: e.target.value };
  //   setForm(nextForm);
  // };
};

export default Info;
