// export { auth as default } from './auth';
import { NextRequest } from 'next/server';
import { updateSession } from './lib';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}
