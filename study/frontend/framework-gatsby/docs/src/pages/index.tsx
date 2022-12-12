import React from 'react';
import { Link } from 'gatsby';

// Gatsby Link 컴포넌트는 Preload 기능을 제공하므로, Gatsby에서 생성된 페이지는 이를 이용해 연결하자.
const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to my Gatsby site!</h1>
      <Link to="/about">About</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
