import { BookItem } from '@/components/book-item';
import styles from './page.module.css';
import { BookData } from '@/types';

// 여러 요청을 불러오는 경우, 각 요청에 맞게 컴포넌트를 나눠주면 좋다.
async function AllBooks() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`);

  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }

  const allBooks: BookData[] = await response.json();

  return (
    <div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

async function RecoBooks() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`);

  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }

  const recoBooks: BookData[] = await response.json();

  return (
    <div>
      {recoBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

// Route Group(소괄호로 감싼 폴더명)을 사용하면, 특정 레이아웃을 원하는 그룹의 페이지에만 적용할 수 있다.
// 앱 라우터는 컴포넌트가 기본적으로 서버 컴포넌트로 만들어지기 때문에, 번들에 포함되지 않아 TTI 속도가 빨라진다.
// ㄴ 페이지 라우터에서는 이를 구분하지 못해, 상호작용이 필요 없는 컴포넌트라 하더라도 번들에 포함되었다.
// 함수는 직렬화가 되지 않기에, 서버 컴포넌트는 Props를 통해 클라이언트 컴포넌트에게 데이터를 전달할 수 없다.
// 클라이언트 컴포넌트에 대한 정보는 번들에 담고, 서버 컴포넌트의 실행 결과에 대한 정보는 RSC Payload로서 브라우저에 함께 전달한다.
// 클라이언트는 페이지 교체 시 번들을 토대로 JS를 실행하고, RSC Payload도 적절히 참조하여 페이지 교체를 진행한다.
export default function Home() {
  return (
    <div className={styles.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <RecoBooks />
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <AllBooks />
      </section>
    </div>
  );
}
