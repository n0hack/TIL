import { BookData } from '@/types';
import Link from 'next/link';
import styles from './book-item.module.css';

const BookItem = ({ id, title, subTitle, author, publisher, coverImgUrl }: BookData) => {
  return (
    <Link className={styles.container} href={`/book/${id}`}>
      <img src={coverImgUrl} />
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.subTitle}>{subTitle}</div>
        <br />
        <div className={styles.author}>
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
};

export { BookItem };
