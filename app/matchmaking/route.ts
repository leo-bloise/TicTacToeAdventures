import { searchOpponent } from "@/lib/api/searchOpponent";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {

    const cookiesData = await cookies();

    const reqCookie = cookiesData.get('token');
    
    await searchOpponent(reqCookie?.value ?? '');

    return new NextResponse();
}