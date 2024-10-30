import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onClickButton = () => {
    // Link 태그에 대해서만 프리페칭이 진행된다.
    router.push('/test');
  };

  useEffect(() => {
    // 화면 마운트 중 prefetch 함수로 원하는 페이지를 프리페칭할 수 있다.
    router.prefetch('/test');

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <header>
        <Link href={'/'}>index</Link>
        &nbsp;
        {/* 프리페칭을 원하지 않는 페이지의 경우 prefetch prop을 사용하면 된다. */}
        <Link href={'/search'} prefetch={false}>
          search
        </Link>
        &nbsp;
        <Link href={'/book/1'}>book/1</Link>
        <div>
          <button onClick={onClickButton}>/test 페이지로 이동</button>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}
