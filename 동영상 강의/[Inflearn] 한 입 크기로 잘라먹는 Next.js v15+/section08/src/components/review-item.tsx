import { ReviewItemDeleteButton } from './review-item-delete-button';
import styles from './review-item.module.css';
import { ReviewData } from '@/types';

const ReviewItem = ({ id, content, author, createdAt, bookId }: ReviewData) => {
  return (
    <div className={styles.container}>
      <div className={styles.author}>{author}</div>
      <div className={styles.content}>{content}</div>
      <div className={styles.bottom_container}>
        <div className={styles.date}>{new Date(createdAt).toLocaleString()}</div>
        <div className={styles.delete_btn}>
          <ReviewItemDeleteButton bookId={bookId} reviewId={id} />
        </div>
      </div>
    </div>
  );
};

export { ReviewItem };
