type Params = Promise<{ id: string }>;

// 서버 컴포넌트이기에 async로 만들 수 있다.
const BookPage = async ({ params }: { params: Params }) => {
  const { id } = await params;

  return <div>Book/[{id}] page입니다</div>;
};

export default BookPage;
