import { useRouter } from "next/navigation";
import { useState } from "react";

export function useGoogleSignIn() { 
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const fetchUrl: () => Promise<string> = async () => {
        const response = await fetch('/auth/generate-url');

        const urlResponse = await response.json();
    
        return urlResponse.url
    }

    const exchangeCodeToAccessToken = async (code: string | null) => {
        if(typeof code !== 'string' || code.length == 0) return router.replace('/register');

        const response = await fetch(`/auth/sign-in?code=${code}`, {
            credentials: 'include'
        });

        if (response.status != 200) {
            return router.replace('/register');
        }

        return router.replace('/');
    };

    const redirectToGoogleLogin = async () => {
        setLoading(true);
        const url = await fetchUrl();

        router.replace(url);
        setLoading(false);
    }

    return {
        redirectToGoogleLogin,
        exchangeCodeToAccessToken,
        loading
    }
}