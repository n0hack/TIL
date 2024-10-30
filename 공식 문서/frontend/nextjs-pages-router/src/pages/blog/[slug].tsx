import { useRouter } from 'next/router';

// NOTE [slug]: Dynamic Segment
// { slug: 'a' } 같은 형태로 저장된다.
const Page = () => {
  const router = useRouter();
  return <p>Post: {router.query.slug}</p>;
};

export default Page;
