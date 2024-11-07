import { BookItem } from '@/components/book-item';
import { BookListSkeleton } from '@/components/skeleton/book-list-skeleton';
import { BookData } from '@/types';
import { delay } from '@/util/delay';
import { Suspense } from 'react';

async function SearchResult({ q }: { q: string }) {
  await delay(1500);

  // 검색과 같은 페이지는 searchParams와 같은 동적인 값을 사용하기 때문에 정적 페이지로 만들 수는 없다.
  // 그럼에도 조금이라도 빠르게 만들고 싶다면, 데이터 캐싱을 이용해 볼 수 있다.
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`, {
    cache: 'force-cache',
  });

  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }

  const books: BookData[] = await response.json();

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

// 기본적으로 SSG로 생성되나, query나 param을 사용하는 등의 정적 페이지로 만들기 애매한 페이지는 동적인 페이지로 생성된다.
// SSG는 프리페칭 시 RSC Payload와 번들 모두 불러오지만, Dynamic Page의 경우 RSC Payload만 먼저 불러온다. 번들은 실제 이동 후 불러온다.
const SearchPage = async ({ searchParams }: { searchParams: Promise<{ q: string }> }) => {
  const { q } = await searchParams;

  return (
    // 스트리밍과 동일하게 그냥 Suspense만 쓰면, 쿼리스트링 변경 시 로딩 상태가 사라지나, key를 이용하면 쿼리스트링에 따라 로딩 상태를 발생시킬 수 있다.
    <Suspense key={q} fallback={<BookListSkeleton count={3} />}>
      <SearchResult q={q || ''} />
    </Suspense>
  );
};

export default SearchPage;
