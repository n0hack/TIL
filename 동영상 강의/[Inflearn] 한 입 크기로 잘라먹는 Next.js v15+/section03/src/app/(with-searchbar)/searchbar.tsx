'use client';

import { useState } from 'react';

// 클라이언트 컴포넌트는 번들 크기를 줄이기 위해 최대한 적게, 필요한 곳에만 만드는 것이 좋다.
const Searchbar = () => {
  const [search, setSearch] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input value={search} onChange={onChange} />
      <button>검색</button>
    </div>
  );
};

export { Searchbar };
