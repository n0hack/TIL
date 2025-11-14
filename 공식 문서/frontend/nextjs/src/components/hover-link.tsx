'use client';

import Link from 'next/link';
import { useState } from 'react';

type HoverLinkProps = {
  href: string;
  children: React.ReactNode;
};

export const HoverLink = ({ href, children }: HoverLinkProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Link href={href} prefetch={isActive ? null : false} onMouseEnter={() => setIsActive(true)}>
      {children}
    </Link>
  );
};
