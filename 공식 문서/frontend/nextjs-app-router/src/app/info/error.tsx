'use client';

import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

const Page = ({ reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => {
          startTransition(() => {
            router.refresh();
            reset();
          });
        }}
      >
        리셋하기
      </button>
    </div>
  );
};

export default Page;
