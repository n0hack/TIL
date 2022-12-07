import React from 'react';
import { Link } from 'gatsby';

interface ILayoutProps {
  title: string;
  children?: React.ReactNode;
}

const Layout = ({ title, children }: ILayoutProps) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Go Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{title}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
