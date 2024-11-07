import { BookData } from '@/types';
import styles from './book-item.module.css';
import Link from 'next/link';
import Image from 'next/image';

type BookItemProps = BookData;

const BookItem = ({ id, title, subTitle, author, publisher, coverImgUrl }: BookItemProps) => {
  return (
    <Link className={styles.container} href={`/book/${id}`}>
      <Image src={coverImgUrl} width={80} height={105} alt={`도서 ${title}의 표지 이미지`} />
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
