import { generateTokenOnOAuthCode } from "@/lib/api/generateTokenOnOAuthCode";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const code = searchParams.get('code');

    if(typeof code !== 'string') throw new Error();

    const token = await generateTokenOnOAuthCode(code);

    return Response.json({
        token
    })
}