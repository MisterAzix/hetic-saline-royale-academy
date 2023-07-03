import { NextRequest } from 'next/server';
// import { routes } from './routes';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export function middleware(req: NextRequest) {
  /* if (req.nextUrl.pathname === routes.root) {
    return NextResponse.redirect(new URL(routes.dashboard, req.url));
  } */
}
