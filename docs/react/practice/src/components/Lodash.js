import React from 'react';
import { debounce, throttle } from 'lodash';

const Lodash = () => {
  const debounceFunc = debounce((e) => {
    console.log('Debounce API Call', e.target.value);
  }, 1000);

  const throttleFunc = throttle(
    (e) => console.log('Throttle API Call', e.target.value),
    1000
  );

  return (
    <div>
      <h2>검색어 입력</h2>
      <label htmlFor="">디바운스</label>
      <input type="text" onChange={debounceFunc} />
      <label htmlFor="">스로틀</label>
      <input type="text" onChange={throttleFunc} />
    </div>
  );
};

export default Lodash;
