import Head from 'next/head';
import ErrorBoundary from '../components/ErrorBoundary';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import '../styles/globals.css'
import config from '../config';

Sentry.init({
  /*
   * 중요코멘트
   * dsn 값은 사용자마다 다릅니다. 사용자 계정의 센트리 dsn 값으로 교체해 주세요.
   */
  dsn: "https://cf60e38d6ca14c46b709580e8bd20d53@o1373406.ingest.sentry.io/6701391",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

function MyApp({ Component, pageProps }) {  
  return (
    <ErrorBoundary>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      </Head>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp
