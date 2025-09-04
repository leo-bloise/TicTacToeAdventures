'use client';

import { useGoogleSignIn } from "@/features/auth/hooks/client/useGoogleSignIn";
import { GoogleSignInButton } from "./googleSignInButton";

export function GoogleSignInContainer() {
    const { redirectToGoogleLogin, loading } = useGoogleSignIn();

    return <GoogleSignInButton 
        handleClick={redirectToGoogleLogin}
        isLoading={false}
    />
}