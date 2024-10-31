// _app.tsx를 제외하고는 각 페이지 및 컴포넌트에서의 이름 충돌 문제로 글로벌 CSS를 불러올 수 없다.
// 이를 해결하기 위해서는 컴포넌트나 페이지에 따라 독립적인 클래스명을 생성하는 CSS Module을 이용할 수 있다.
import { SearchableLayout } from '@/components/searchable-layout';
import styles from './index.module.css';
import { BookItem } from '@/components/book-item';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import fetchBooks from '@/lib/fetch-books';
import fetchRandomBooks from '@/lib/fetch-random-books';
import Head from 'next/head'; // 페이지 내에서 Head를 작성할 때는, next/head를 불러와야 한다.

// 자주 변경되지 않는 페이지는 SSG로 사전 빌드 시간에 생성하는 것이 좋다.
// getStaticProps나 getServerSideProps가 없다면, 기본적으로 SSG로 동작한다.
export const getStaticProps = (async () => {
  const [allBooks, recoBooks] = await Promise.all([fetchBooks(), fetchRandomBooks()]);

  return {
    props: {
      allBooks,
      recoBooks,
    },
    // ISR(증분 정적 재생성) 적용 - 초 단위
    // revalidate: 3,
    // On-demand ISR(주문형 ISR) - 사용자 요청에 따라 재생성하는 방법(API 이용)
    // ㄴ 초 단위 생성이 불필요한 페이지들의 경우에 적용을 고려할 수 있다.
  };
}) satisfies GetStaticProps;

// export const getServerSideProps = (async () => {
//   const [allBooks, recoBooks] = await Promise.all([fetchBooks(), fetchRandomBooks()]);

//   return {
//     props: {
//       allBooks,
//       recoBooks,
//     },
//   };
// }) satisfies GetServerSideProps;

// 개발 모드로 켰을 때는, 프리페칭이 동작하지 않는다.
export default function Home({ allBooks, recoBooks }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>한입북스</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입북스" />
        <meta property="og:description" content="한입 북스에 등록된 도서들을 만나보세요" />
      </Head>
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
    </>
  );
}

Home.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
