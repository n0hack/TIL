import { Suspense } from 'react';
import { Searchbar } from '../../components/searchbar';

const SearchLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* 사전 렌더링 하지 않고, 오직 클라이언트에서만 렌더링되도록 한다. */}
      <Suspense fallback={<div>Loading...</div>}>
        <Searchbar />
      </Suspense>
      {children}
    </div>
  );
};

export default SearchLayout;
