import { Html, Head, Main, NextScript } from 'next/document';

// 모든 페이지에 적용이 되는 코드를 관리하기 위한 곳(메타 태그, 스크립트 등)
export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
