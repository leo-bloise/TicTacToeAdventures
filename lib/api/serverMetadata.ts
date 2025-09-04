import { Server } from "http";

export class ServerMetadata {
    private static ServerMetadataInstance?: ServerMetadata;

    private constructor(private _baseUrl: URL) {}

    createUrl(url: string): URL {
        return new URL(url, this._baseUrl);
    }

    static fromEnv(): ServerMetadata {
        if(this.ServerMetadataInstance) {
            return this.ServerMetadataInstance;
        }
        const baseUrl = process.env.API_URL;
        
        if(!baseUrl) {
            throw new Error("API_URL environment variable is not set");
        }

        return new ServerMetadata(new URL(baseUrl));
    }
}