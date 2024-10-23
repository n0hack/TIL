import { Link } from 'gatsby';
import React, { PropsWithChildren } from 'react';
import * as styles from './Layout.module.scss';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

type LayoutProps = {
  pageTitle: string;
};

const Layout = ({ pageTitle, children }: PropsWithChildren<LayoutProps>) => {
  const data = useSiteMetadata();

  return (
    <div className={styles.container}>
      <header className={styles.siteTitle}>{data?.title}</header>
      <nav>
        <ul className={styles.navLinks}>
          <li className={styles.navLinkItem}>
            <Link to="/" className={styles.navLinkText}>
              Home
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link to="/about" className={styles.navLinkText}>
              About
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link to="/blog" className={styles.navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={styles.heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export { Layout };
