'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './serachbar.module.css';

// 클라이언트 컴포넌트는 번들 크기를 줄이기 위해 최대한 적게, 필요한 곳에만 만드는 것이 좋다.
// 하지만, 클라이언트 컴포넌트도 최초에는 서버에서 사전 렌더링을 위해 한 번 실행되므로 주의가 필요하다.
const Searchbar = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  const q = searchParams.get('q');

  useEffect(() => {
    setSearch(q || '');
  }, [q]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    if (search === '' || q === search) return;
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <div className={styles.container}>
      <input value={search} onChange={onChange} onKeyDown={onKeyDown} />
      <button onClick={onSubmit}>검색</button>
    </div>
  );
};

export { Searchbar };
