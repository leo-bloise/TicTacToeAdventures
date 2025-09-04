import { useRouter } from "next/navigation";
import { useState } from "react";

export function useGoogleSignIn() { 
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const fetchUrl: () => Promise<string> = async () => {
        const response = await fetch('/auth/api');

        const urlResponse = await response.json();
    
        return urlResponse.url
    }

    const redirectToGoogleLogin = async () => {
        setLoading(true);
        const url = await fetchUrl();

        router.replace(url);
        setLoading(false);
    }

    return {
        redirectToGoogleLogin,
        loading
    }
}