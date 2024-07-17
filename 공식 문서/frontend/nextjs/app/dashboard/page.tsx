import { Metadata } from 'next';
import { usePathname } from 'next/navigation';

export const metadata: Metadata = {
  title: '대시보드',
};

const Page = () => {
  return <div>대시보드</div>;
};

export default Page;
