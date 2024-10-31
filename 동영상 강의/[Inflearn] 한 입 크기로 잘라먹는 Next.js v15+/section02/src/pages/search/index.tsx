// next/navigation은 app router용
import { BookItem } from '@/components/book-item';
import { SearchableLayout } from '@/components/searchable-layout';
import fetchBooks from '@/lib/fetch-books';
import { BookData } from '@/types';
// import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// 검색 관련 페이지는 빌드 시간에 Query를 읽을 수 없기 때문에, SSG로 만들 수 없다.
// 그렇기 때문에 만약 빌드 시간에 만들고 싶은 경우, CSR 형태의 코드로 만든 후 빌드해야 한다.
// export const getServerSideProps = (async (context) => {
//   const { q } = context.query;
//   const books = await fetchBooks(q as string);

//   return {
//     props: {
//       books,
//     },
//   };
// }) satisfies GetServerSideProps;

export default function SearchPage() {
  // SSG 위해 클라이언트에서 검색 로직 수행하도록 변경(HTML 코드 부분에 대해서만 사전 빌드로 생성)
  const [books, setBooks] = useState<BookData[]>([]);
  const router = useRouter();
  const q = router.query.q;

  const fetchSearchResult = async () => {
    const data = await fetchBooks(q as string);
    setBooks(data);
  };

  useEffect(() => {
    if (q) {
      fetchSearchResult();
    }
  }, [q]);

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

SearchPage.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
