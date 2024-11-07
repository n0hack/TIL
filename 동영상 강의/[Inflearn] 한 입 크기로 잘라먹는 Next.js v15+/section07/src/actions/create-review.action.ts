'use server';

import { revalidatePath, revalidateTag } from 'next/cache';

// 서버 액션을 만들게 되면, 이 코드를 실행하는 API가 자동으로 생성되며 브라우저에서 사용 시 호출된다.
// 단순한 기능만 처리해도 될 경우에는 간결하게 서버 액션을 만들어 활용하면 좋다.
// 조금 더 간결하게 편리하게 서버 측 동작을 정의하는 것에 목적을 두고 있다.
export async function createReviewAction(_: any, formData: FormData) {
  const bookId = formData.get('bookId')?.toString();
  const content = formData.get('content')?.toString();
  const author = formData.get('author')?.toString();

  if (!bookId || !content || !author) {
    return {
      status: false,
      error: '리뷰 내용과 작성자를 입력해주세요',
    };
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`, {
      method: 'POST',
      body: JSON.stringify({ bookId, content, author }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    console.log(response.status);
    // 인수로 들어온 페이지 재검증(재생성)하는 함수로 오직 서버 및 서버 액션에서만 실행 가능하다.
    // 해당 경로의 페이지에 있는 모든 서버 로직을 다시 실행하여 페이지를 재생성하게 된다.
    // ㄴ 모든 캐시(풀라우트, 데이터 캐시 등)도 무효화한다. (무효화 후에는 새로고침 및 재방문 전까지 캐싱되지 않음. 새로고침 및 다시 방문한 후에야 동적으로 생성 후 다시 캐싱하는 식)
    // 재방문 시 무조건 최신 정보를 보여주기 위해 이와 같이 동작한다.
    // revalidatePath(`/book/${bookId}`);

    // 2. 특정 경로의 모든 동적 페이를 재검증. 모든 id 페이지
    // revalidatePath("/book/[id]", "page");

    // 3. 특정 레이아웃을 갖는 모든 페이지 재검증
    // searchbar 레이아웃을 갖는 모든 페이지 재검증
    // revalidatePath('/(with-searchbar)', "layout")

    // 4. 모든 데이터 재검증
    // revalidatePath("/", "layout");

    // 5. 태그 기준. 데이터 캐시 재검증 (next 옵션 안에 있는 tags)
    // 모든 캐시를 초기화하는 방법보다 효율적이다.
    revalidateTag(`review-${bookId}`);

    return {
      status: true,
      error: '',
    };
  } catch (err) {
    return {
      status: false,
      error: `리뷰 저장에 실패했습니다: ${err}`,
    };
  }
}
