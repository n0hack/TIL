import React, { useEffect, useState } from 'react';
import './Test.scss';

const Test = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);

  return <div>{loading ? <h1>로딩 중...</h1> : <h1>로딩 완료!</h1>}</div>;
};

export default Test;
