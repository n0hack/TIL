import React, { useEffect, useState } from 'react';

const Info2 = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  useEffect(() => {
    console.log('렌더링 완료');
    console.log({ name, nickname });
    document.title = name;

    return () => {
      console.log('cleanup === willunmount');
      console.log({ name, nickname });
    };
  }, [name, nickname]);

  const handleChange = (e) => {
    if (e.target.name === 'name') setName(e.target.value);
    if (e.target.name === 'nickname') setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          autoComplete="off"
        />
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

export default Info2;
