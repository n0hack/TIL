import '@/styles/globals.css';
import type { AppProps } from 'next/app';

interface CustomAppProps extends AppProps {
  Component: AppProps['Component'] & {
    getLayout: (page: React.ReactNode) => JSX.Element;
  };
}

export default function App({ Component, pageProps }: CustomAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
