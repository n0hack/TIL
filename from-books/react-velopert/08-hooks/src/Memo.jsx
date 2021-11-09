import React, { useMemo, useState } from 'react';

function getAverage(number) {
  console.log('평균값 계산 중...');
  if (number.length === 0) return 0;
  return number.reduce((a, b) => a + b) / number.length;
}

const Memo = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = (e) => setNumber(e.target.value);
  const onInsert = () => {
    if (number === '') return;
    const nextList = list.concat(parseInt(number));
    setList(() => {
      return nextList;
    });
    setNumber('');
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') onInsert();
  };

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} onKeyPress={onKeyPress} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <b>평균값: </b> {getAverage(list)}
      </div>
    </div>
  );
};

export default Memo;
