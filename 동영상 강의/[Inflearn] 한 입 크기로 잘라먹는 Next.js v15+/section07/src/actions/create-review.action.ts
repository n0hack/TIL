'use server';
// 서버 액션을 만들게 되면, 이 코드를 실행하는 API가 자동으로 생성되며 브라우저에서 사용 시 호출된다.
// 단순한 기능만 처리해도 될 경우에는 간결하게 서버 액션을 만들어 활용하면 좋다.
// 조금 더 간결하게 편리하게 서버 측 동작을 정의하는 것에 목적을 두고 있다.
export async function createReviewAction(formData: FormData) {
  const bookId = formData.get('bookId')?.toString();
  const content = formData.get('content')?.toString();
  const author = formData.get('author')?.toString();

  if (!bookId || !content || !author) {
    return;
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`, {
      method: 'POST',
      body: JSON.stringify({ bookId, content, author }),
    });
    console.log(response.status);
  } catch (err) {
    console.error(err);
  }
}
