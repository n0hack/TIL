import './globals.css';
import Link from 'next/link';
import styles from './layout.module.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={styles.container}>
          <header>
            <Link href="/">📚 ONEBITE BOOKS</Link>
          </header>
          <main>{children}</main>
          <footer>제작 @Lucid</footer>
        </div>
      </body>
    </html>
  );
}
