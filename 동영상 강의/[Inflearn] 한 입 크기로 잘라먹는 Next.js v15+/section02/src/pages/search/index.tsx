// next/navigation은 app router용
import { BookItem } from '@/components/book-item';
import { SearchableLayout } from '@/components/searchable-layout';
import books from '@/mock/books.json';

export default function SearchPage() {
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
