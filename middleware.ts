import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const publicRoutes = [
    '/auth',
    '/auth/generate-url',
    '/auth/sign-in',
    '/register'
];

export async function middleware(request: NextRequest) {
    const { get } = await cookies();

    const path = request.nextUrl.pathname;
    
    const isPublicRoute = publicRoutes.includes(path);

    const tokenCookie = get('token');

    if(isPublicRoute && tokenCookie) {
        return NextResponse.redirect(new URL('/', request.nextUrl));
    }

    if(!isPublicRoute && !tokenCookie) {
        return NextResponse.redirect(new URL('/register', request.nextUrl))
    }

    return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}