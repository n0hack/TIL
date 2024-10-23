'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type LinksProps = {};

const Links = ({}: LinksProps) => {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={`link ${pathname === '/dashboard' ? 'active' : ''}`} href="/dashboard">
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Links;
