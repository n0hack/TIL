// _app.tsx를 제외하고는 각 페이지 및 컴포넌트에서의 이름 충돌 문제로 글로벌 CSS를 불러올 수 없다.
// 이를 해결하기 위해서는 컴포넌트나 페이지에 따라 독립적인 클래스명을 생성하는 CSS Module을 이용할 수 있다.
import { SearchableLayout } from '@/components/searchable-layout';
import styles from './index.module.css';
import books from '@/mock/books.json';
import { BookItem } from '@/components/book-item';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export const getServerSideProps = (async () => {
  // 컴포넌트보다 먼저 실행되어서, 컴포넌트에 필요한 데이터를 불러오는 함수
  // 오직 서버 측에서 단 한 번만 실행된다.
  const data = 'hello';

  return {
    props: {
      data,
    },
  };
}) satisfies GetServerSideProps<{ data: string }>;

// 개발 모드로 켰을 때는, 프리페칭이 동작하지 않는다.
export default function Home({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // 컴포넌트 또한 서버에서 한 번 실행되기 때문에, 조건 없이 window.location 등을 사용하게 되면 에러가 발생한다.
  // window가 undefined이기 때문인데, 이를 해결하는 방법 중 하나로 클라이언트에서만 실행되는 useEffect를 이용할 수 있다.
  console.log(data);

  return (
    <div className={styles.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
