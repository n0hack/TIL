import React, { useRef, useState } from 'react';

// 함수를 재사용하기 위해 함수를 반환하는 형태
// func(a)(b)
const Currying = () => {
  const [res, setRes] = useState(0);
  const plus = (a, b) => a + b;

  const plusFunc = (a) => (b) => plus(a, b);
  const ia = useRef();
  const ib = useRef();

  const onSubmit = (e) => {
    const r = plusFunc(parseInt(ia.current.value))(parseInt(ib.current.value));
    setRes(r);
  };

  return (
    <div>
      <input type="text" ref={ia} />
      <input type="text" ref={ib} />
      <button onClick={onSubmit}>클릭</button>
      <p>{res}</p>
    </div>
  );
};

export default Currying;
