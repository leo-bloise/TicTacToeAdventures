import { generateTokenOnOAuthCode } from "@/lib/api/generateTokenOnOAuthCode";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const code = searchParams.get('code');

    if(typeof code !== 'string') throw new Error();

    const token = await generateTokenOnOAuthCode(code);
    
    const response = NextResponse.json({
        token
    })

    response.cookies.set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 12
    });    


    return response;
}