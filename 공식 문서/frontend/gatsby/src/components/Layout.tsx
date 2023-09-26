import { Link } from 'gatsby';
import React, { PropsWithChildren } from 'react';
import * as styles from './Layout.module.scss';

type LayoutProps = {
  pageTitle: string;
};

const Layout = ({ pageTitle, children }: PropsWithChildren<LayoutProps>) => {
  return (
    <div className={styles.container}>
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
