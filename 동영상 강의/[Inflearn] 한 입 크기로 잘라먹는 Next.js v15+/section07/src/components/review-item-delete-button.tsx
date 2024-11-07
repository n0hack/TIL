'use client';

import { deleteReviewAction } from '@/actions/delete-review.action';
import { useActionState, useEffect, useRef } from 'react';

type ReviewItemDeleteButtonProps = {
  reviewId: number;
  bookId: number;
};

const ReviewItemDeleteButton = ({ bookId, reviewId }: ReviewItemDeleteButtonProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(deleteReviewAction, null);

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction}>
      <input name="reviewId" value={reviewId} hidden readOnly />
      <input name="bookId" value={bookId} hidden readOnly />
      {isPending ? <div>...</div> : <div onClick={() => formRef.current?.requestSubmit()}>삭제하기</div>}
    </form>
  );
};

export { ReviewItemDeleteButton };
