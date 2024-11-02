import { BookItem } from '@/components/book-item';
import styles from './page.module.css';
import { BookData } from '@/types';

// 특정 페이지의 유형을 Static 또는 Dynamic으로 강제 설정하는 옵션
// 1. auto - 기본값, 아무것도 강제하지 않음
// 2. force-dynamic - 페이지를 강제로 dynamic 페이지로 설정
// 3. force-static - 페이지를 강제로 static 페이지로 설정
// 4. error - 페이지를 강제로 static 페이지로 설정 (빌드가 안 된다 하면 에러 출력)
// ㄴ search 페이지 쪽은 searchParams를 사용하고 있기에 에러가 출력된다.
// export const dynamic = 'force-static';

// 여러 요청을 불러오는 경우, 각 요청에 맞게 컴포넌트를 나눠주면 좋다.
async function AllBooks() {
  // 캐싱을 적용하게 되면, Next 서버의 데이터 캐시 쪽에 json 형태로 값을 저장(.next/cache/fetch-cache)하고 활용하게 된다.
  // fetch의 캐싱 기본값은 no-store이고, v15부터 기본값으로 변경되었다. (v14까지는 자동으로 캐싱되었음)
  // cache: 'no-store' - 캐싱 X
  // cache: 'forced-cache' - 영구 캐싱
  // next: { revalidate: n } - ISR과 비슷하게 캐싱 (Set - Hit - Stale - Set - Hit 반복) // Set 캐싱, Hit 일치, Stale 상함
  // next: { tags: ['a'] } - On-demand ISR과 비슷하게 요청에 의해 캐싱

  // [리퀘스트 메모이제이션] 데이터 캐시 이전에 하나의 페이지를 렌더링하기 위해 요청하는 API 중 중복된 것이 있을 때 캐싱 용도로 사용한다.
  // ㄴ 렌더링이 종료되면 요청 캐시가 소멸되기에 데이터 캐싱과는 엄연히 다르다.
  // [데이터 캐시] 백엔드에서 응답 받은 데이터를 거의 영구적으로 보관하기 위해 사용한다.
  // ㄴ 서버가 구동 중인 동안에는 계속 유지된다.
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`, { cache: 'force-cache' });

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
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`, { next: { revalidate: 3 } });

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
