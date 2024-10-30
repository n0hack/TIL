// next/navigation은 app router용
import { SearchableLayout } from '@/components/searchable-layout';
import { useRouter } from 'next/router';

export default function SearchPage() {
  const router = useRouter();
  const { q } = router.query;

  return <h1>Search {q}</h1>;
}

SearchPage.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
