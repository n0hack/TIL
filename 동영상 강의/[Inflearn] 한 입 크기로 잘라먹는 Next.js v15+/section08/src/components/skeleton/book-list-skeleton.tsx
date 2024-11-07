import { BookItemSkeleton } from './book-item-skeleton';

type BookListSkeletonProps = { count: number };

const BookListSkeleton = ({ count }: BookListSkeletonProps) => {
  return new Array(count).fill(0).map((_, idx) => <BookItemSkeleton key={idx} />);
};

export { BookListSkeleton };
