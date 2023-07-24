import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';

type PageLayoutProps = {
  children?: React.ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="bg-blue-400 h-full w-full">
      <header className="h-[60px] bg-white flex items-center pl-6">헤더</header>
      <div className="flex h-[calc(100%-60px)]">
        <nav className="min-w-[240px] h-full bg-slate-400 p-6">
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/users">유저</Link>
            </li>
          </ul>
        </nav>

        <main className="w-full h-full bg-gray-100 p-6">{children}</main>
      </div>
    </div>
  );
};

export default PageLayout;
