import React, { useCallback, useMemo, useState } from 'react';

const getAverage = (numbers) => {
  if (numbers.length === 0) return 0;
  console.log('평균값 계산 중');
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onClick = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setNumber('');
    setList(nextList);
  }, [number, list]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onClick}>등록</button>
      <ul>
        {list.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
      <div>
        <b>평균값: {avg}</b>
      </div>
    </div>
  );
};

export default Average;
