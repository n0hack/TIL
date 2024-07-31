'use client';
import Link from 'next/link';

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <Link className="border rounded-md px-4 py-2 flex bg-purple-300 font-medium hover:bg-purple-400" href="/">
            홈
          </Link>
        </li>
        <li>
          <Link className="border rounded-md px-4 py-2 flex bg-purple-300 font-medium hover:bg-purple-400" href="/test">
            테스트
          </Link>
        </li>
        <li>
          <Link
            className="border rounded-md px-4 py-2 flex bg-purple-300 font-medium hover:bg-purple-400"
            href={`/auth`}
          >
            로그인
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
