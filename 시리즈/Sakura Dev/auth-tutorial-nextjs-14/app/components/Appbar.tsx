import { Button, Navbar, NavbarContent, NavbarItem } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

type AppbarProps = {};

const Appbar = ({}: AppbarProps) => {
  return (
    <Navbar isBordered>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="hover:text-sky-500 transition-colors" color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>{/* <SigninButton /> */}</NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Appbar;
