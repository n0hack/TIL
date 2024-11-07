// 폴더명 앞에 @가 붙으면 슬롯이라 부르며, 병렬로 렌더링 될 페이지 컴포넌트를 보관한다.
// 해당 컴포넌트들은 슬롯 이름 그대로 prop으로 내려온다.

import Link from 'next/link';

// 슬롯은 개수 제한이 없다.
const ParallelLayout = ({
  children,
  sidebar,
  feed,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  feed: React.ReactNode;
}) => {
  return (
    <div>
      <div>
        <Link href={`/parallel`}>parallel</Link>
        &nbsp;
        <Link href={`/parallel/setting`}>parallel/setting</Link>
      </div>
      <br />
      {sidebar}
      {feed}
      {children}
    </div>
  );
};

export default ParallelLayout;
