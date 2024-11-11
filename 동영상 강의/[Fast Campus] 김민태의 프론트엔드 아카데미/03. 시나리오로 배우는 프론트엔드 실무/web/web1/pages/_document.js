import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="utf-8" />
          <meta property="og:url" content="http://www.12shop.com" />
          <meta property="og:type" content="web service" />
          <meta property="og:title" content="12shop" />
          <meta property="og:description" content="하루 두번 소중한 기회가 찾아오는 쇼핑몰 서비스" />
          <meta property="og:image" content="http://www.12shop.com/images/cover.jpg" />
          <meta name="twitter:card" content="app"></meta>
          <meta name="twitter:site" content="http://12shop.com"></meta>
          <meta name="twitter:creator" content="12shop"></meta>
          <link rel="stylesheet" href="/css/default.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument