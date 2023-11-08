import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import navList from './navLiost';
import Test from './Test.astro';

type HeaderProps = {
  transition?: boolean;
};

const Header = ({ transition }: HeaderProps) => {
  const [scrollY, setScrollY] = useState(0);
  // 스크롤 위치에 따라 Header의 배경색을 변경함
  const filled = !transition || (transition && scrollY > 64);

  console.log(filled);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={twMerge(
        'fixed inset-0 top-0 left-0 z-10 h-[64px] w-full bg-transparent text-white transition duration-300',
        filled && 'border-b border-gray-200 bg-white text-gray-900',
      )}
    >
      <div className="mx-auto flex h-full max-w-[1024px] items-center justify-between pl-6 pr-[14px] desktop:pl-[40px] desktop:[pr-30px]">
        <div className="flex items-center gap-[60px]">
          <a href="/" className="py-2">
            Logo
            {/* <Logo className="w-144pxr duration-100" /> */}
          </a>
          <nav className="">
            <ul className="flex gap-6">
              {navList.map(({ name, path }) => (
                <li key={path}>
                  <a
                    href={path}
                    className={twMerge(
                      'py-8pxr text-sm font-medium duration-100 hover:text-red-400',
                      // location.pathname.includes(path) && 'text-red-400',
                    )}
                  >
                    {name}
                    {/* <Test /> */}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="h-full">
          <ul className="relative flex h-full items-center">
            {/* <SearchButton />
            <MenuButton /> */}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
