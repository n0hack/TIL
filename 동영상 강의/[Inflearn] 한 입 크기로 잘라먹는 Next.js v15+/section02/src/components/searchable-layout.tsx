import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect, useState } from 'react';
import styles from './searchable-layout.module.css';

const SearchableLayout = ({ children }: PropsWithChildren) => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const q = router.query.q;

  useEffect(() => {
    if (typeof q === 'string') {
      setSearch(q || '');
    }
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${encodeURIComponent(search)}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <div>
      <div className={styles.searchbar_container}>
        <input value={search} onChange={onChangeSearch} onKeyDown={onKeyDown} placeholder="검색어를 입력하세요..." />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  );
};

export { SearchableLayout };
