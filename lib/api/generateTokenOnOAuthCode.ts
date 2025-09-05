import { ApiResponseData } from "./dtos/apiResponseData";
import { ServerMetadata } from "./serverMetadata";

type TokenResponse = {
    token: string;
};

export async function generateTokenOnOAuthCode(code: string): Promise<string> {
    const metadata = ServerMetadata.fromEnv(); 

    const request = new Request(
        metadata.createUrl(`/auth/sign-in?code=${code}`)
    );

    const response = await fetch(request, {
        method: 'GET'
    });

    console.log(response);

    if(response.status !== 200) throw new Error();

    const jsonResponse: ApiResponseData<TokenResponse> = await response.json();

    return jsonResponse.data.token;
}