type Params = Promise<{ id: string }>;

const BookPage = async ({ params }: { params: Params }) => {
  const { id } = await params;

  return <div>Book/[{id}] page입니다</div>;
};

export default BookPage;
