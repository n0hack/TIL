// next/navigation은 app router용
import { useRouter } from 'next/router';

export default function SearchPage() {
  const router = useRouter();
  const { q } = router.query;

  return <h1>Search {q}</h1>;
}
