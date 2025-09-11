import { ServerMetadata } from "./serverMetadata";

export async function searchOpponent(token: string) {
    const metadata = ServerMetadata.fromEnv();

    const url = metadata.createUrl('/matchmaking');

    const headers = new Headers();

    headers.append('Authorization', `Bearer ${token}`);

    await fetch(url, {
        method: 'GET',
        credentials: 'include',
        headers
    });
}