import { BookData } from '@/types';
import styles from './page.module.css';
import { notFound } from 'next/navigation';

// 라우트 세그먼트 옵션
// 강제로 페이지를 static 또는 dynamic으로 만드는 옵션 (auto, force-static, force-dynamic, error - static으로 하되, static으로 만들면 안 되는 경우 오류 발생)
// 매우 특별한 상황이 아니라면 권장되지 않는 옵션이다. (각 컴포넌트들의 용도에 따라 NextJS는 세밀하게 렌더링을 조정하고 있기 때문)
// export const dynamic = "";

// 정적 경로에 해당되지 않는 페이지는 자동으로 NotFound로 보낸다.
// dynamicParams를 허용하지 않겠다는 의미 (기본값 - ture)
// export const dynamicParams = false;

// params를 사용하는 페이지도 기본적으로 동적 페이지이나, 정적 경로 생성을 통해 풀라우트 캐싱이 가능하다.
export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

type Params = Promise<{ id: string }>;

// 서버 컴포넌트이기에 async로 만들 수 있다.
const BookPage = async ({ params }: { params: Params }) => {
  const { id: bookId } = await params;

  // 정적 경로 생성을 하게 된 경우, 캐싱이 적용되지 않았더라도 캐싱 처리를 하게 된다. (정적 페이지가 되므로)
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`);

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
    return <div>오류가 발생했습니다...</div>;
  }

  const book: BookData = await response.json();

  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <div className={styles.container}>
      <div className={styles.cover_img_container} style={{ backgroundImage: `url('${coverImgUrl}')` }}>
        <img src={coverImgUrl} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.subTitle}>{subTitle}</div>
      <div className={styles.author}>
        {author} | {publisher}
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default BookPage;
