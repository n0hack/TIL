import { BookData } from '@/types';
import styles from './page.module.css';

type Params = Promise<{ id: string }>;

// 서버 컴포넌트이기에 async로 만들 수 있다.
const BookPage = async ({ params }: { params: Params }) => {
  const { id: bookId } = await params;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`);

  if (!response.ok) {
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
