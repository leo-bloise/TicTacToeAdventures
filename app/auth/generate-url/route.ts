import { getOAUthGoogleUrl } from "@/lib/api/getOAuthGoogleUrl";

export async function GET() {
    const oauthUrl = await getOAUthGoogleUrl();

    return Response.json({
        url: oauthUrl
    });
}