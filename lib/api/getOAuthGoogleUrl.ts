import { ApiResponseData } from "./dtos/apiResponseData";
import { ServerMetadata } from "./serverMetadata";

type ResponseOAuth = {
    url: string;
}

export async function getOAUthGoogleUrl(): Promise<URL> {
    const metadata = ServerMetadata.fromEnv();   

    const request = new Request(
        metadata.createUrl('/oauth/google')
    );

    const response = await fetch(request, {
        method: 'GET'
    });

    if(response.status !== 200) {
        throw new Error();
    }

    const jsonResponse: ApiResponseData<ResponseOAuth> = await response.json();

    return new URL(jsonResponse.data.url);
}