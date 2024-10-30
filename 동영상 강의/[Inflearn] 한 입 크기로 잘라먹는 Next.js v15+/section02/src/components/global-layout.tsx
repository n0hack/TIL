import Link from 'next/link';
import { PropsWithChildren } from 'react';
import styles from './global-layout.module.css';

const GlobalLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">📚 ONEBITE BOOKS</Link>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>제작 @Lucid</footer>
    </div>
  );
};

export { GlobalLayout };
