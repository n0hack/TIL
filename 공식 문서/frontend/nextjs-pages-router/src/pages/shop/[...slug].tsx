import { useRouter } from 'next/router';

// NOTE [...slug]: Catch-all Segments
// { slug: ['a', 'b'] } 같이 배열 형태로 저장된다.
// NOTE [[...slug]]: Optional Catch-all Segments
// 루트 경로(/shop)까지 매칭되며, 이 경우는 { slug: undefined } 형태로 저장된다.
const Page = () => {
  const router = useRouter();
  return <div>{router.query.slug}</div>;
};

export default Page;
