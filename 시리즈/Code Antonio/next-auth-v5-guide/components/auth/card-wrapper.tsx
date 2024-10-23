'use client';

import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Header } from '@/components/auth/header';
import Social from '@/components/auth/social';
import { BackButton } from '@/components/auth/back-button';

type CardWrapperProps = {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
};

const CardWrapper = ({ backButtonHref, backButtonLabel, children, headerLabel, showSocial }: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
