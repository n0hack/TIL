'use client';

import { useRouter } from 'next/navigation';
import { startTransition, useEffect } from 'react';

const ErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();

  useEffect(() => {
    console.error(error.message);
  }, [error]);

  return (
    <div>
      <h3>오류가 발생했습니다.</h3>
      {/* 클라이언트 측을 다시 렌더링해보기만 하는 함수이기에, 서버 측을 다시 실행하지는 않는다 */}
      {/* 1) window.location.reload - 서버 측을 다시 실행하기 위해, 강제로 페이지 새로고침 하는 방법 - 하지만 상태들이 날라가고, 모든 정상 컴포넌트가 리렌더링된다. */}
      {/* 2) router.refresh - 서버 컴포넌트만 새로 렌더링하는 방법 사용 후 reset을 통해 새로 렌더링하기 */}
      <button
        onClick={() => {
          // router.refresh가 비동기 함수는 아니지만, 비동기로 동작하기에 startTransition으로 묶어 UI 변경 작업을 일괄로 처리함
          startTransition(() => {
            router.refresh(); // 현재 페이지에 필요한 서버 컴포넌트(RSC Payload)를 다시 불러옴
            reset(); // 에러 상태 초기화 후 컴포넌트를 다시 렌더링
          });
        }}
      >
        다시 시도
      </button>
    </div>
  );
};

export default ErrorPage;
