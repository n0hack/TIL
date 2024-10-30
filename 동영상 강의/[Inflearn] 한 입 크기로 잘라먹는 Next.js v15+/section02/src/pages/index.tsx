// _app.tsx를 제외하고는 각 페이지 및 컴포넌트에서의 이름 충돌 문제로 글로벌 CSS를 불러올 수 없다.
// 이를 해결하기 위해서는 컴포넌트나 페이지에 따라 독립적인 클래스명을 생성하는 CSS Module을 이용할 수 있다.
import { SearchableLayout } from '@/components/searchable-layout';
import styles from './index.module.css';
import { BookItem } from '@/components/book-item';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import fetchBooks from '@/lib/fetch-books';
import fetchRandomBooks from '@/lib/fetch-random-books';

export const getServerSideProps = (async () => {
  const [allBooks, recoBooks] = await Promise.all([fetchBooks(), fetchRandomBooks()]);

  return {
    props: {
      allBooks,
      recoBooks,
    },
  };
}) satisfies GetServerSideProps;

// 개발 모드로 켰을 때는, 프리페칭이 동작하지 않는다.
export default function Home({ allBooks, recoBooks }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={styles.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {recoBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {allBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
