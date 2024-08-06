import { useEffect } from 'react';

type HeaderProps = {
  Component?: React.ReactNode;
};

const Header = ({ Component }: HeaderProps) => {
  return (
    <header className="h-16 w-full border-b flex px-8">
      <nav className="h-full flex-1">
        <ul className="flex h-full">
          <li>
            <a
              className="h-full flex items-center justify-center px-8 hover:bg-gray-100 transition font-medium"
              href="/"
            >
              홈
            </a>
          </li>
          <li>
            <a
              className="h-full flex items-center justify-center px-8 hover:bg-gray-100 transition font-medium"
              href="/mypost"
            >
              내가 쓴 글
            </a>
          </li>
          <li>
            <a
              className="h-full flex items-center justify-center px-8 hover:bg-gray-100 transition font-medium"
              href="/test"
            >
              테스트
            </a>
          </li>
        </ul>
      </nav>
      <div className="h-full flex">{Component}</div>
    </header>
  );
};

export default Header;
