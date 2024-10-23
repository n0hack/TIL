import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  console.log(pathname);

  return NextResponse.next();
}

export const config = {
  matcher: '/blog/:slug*',
};
