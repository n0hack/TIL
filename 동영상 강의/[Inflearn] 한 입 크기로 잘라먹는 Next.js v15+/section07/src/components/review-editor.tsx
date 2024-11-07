'use client';

import { createReviewAction } from '@/actions/create-review.action';
import styles from './review-editor.module.css';
import { useActionState, useEffect } from 'react';

export function ReviewEditor({ bookId }: { bookId: string }) {
  const [state, formAction, isPending] = useActionState(createReviewAction, null);

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <section>
      <form className={styles.form_container} action={formAction}>
        {/* 고정적인 값이 필요한 경우, 이런 형태로 트릭을 활용할 수 있다. */}
        <input type="text" name="bookId" value={bookId} hidden readOnly />
        <textarea name="content" placeholder="리뷰 내용" required disabled={isPending} />
        <div className={styles.submit_container}>
          <input type="text" name="author" placeholder="작성자" required disabled={isPending} />
          <button type="submit" disabled={isPending}>
            {isPending ? '...' : '작성하기'}
          </button>
        </div>
      </form>
    </section>
  );
}
