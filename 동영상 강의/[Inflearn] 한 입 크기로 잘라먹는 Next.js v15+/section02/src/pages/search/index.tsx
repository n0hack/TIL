// next/navigation은 app router용
import { BookItem } from '@/components/book-item';
import { SearchableLayout } from '@/components/searchable-layout';
import fetchBooks from '@/lib/fetch-books';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export const getServerSideProps = (async (context) => {
  const { q } = context.query;
  const books = await fetchBooks(q as string);

  return {
    props: {
      books,
    },
  };
}) satisfies GetServerSideProps;

export default function SearchPage({ books }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

SearchPage.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
