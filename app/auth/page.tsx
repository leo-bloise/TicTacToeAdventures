'use client';

import { SpinLoading } from "@/components/spinLoading";
import { useGoogleSignIn } from "@/features/auth/hooks/client/useGoogleSignIn";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
    const searchParams = useSearchParams();
    const { exchangeCodeToAccessToken } = useGoogleSignIn();

    useEffect(() => {
        const code = searchParams.get('code');

        exchangeCodeToAccessToken(code);
    }, []);

    return <main className="w-full h-full flex justify-center items-center">
        <SpinLoading />
    </main>
}