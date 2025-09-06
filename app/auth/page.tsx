'use client';

import { SpinLoading } from "@/components/spinLoading";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const getCookies = async (code: string | null) => {
        if(typeof code !== 'string' || code.length == 0) return router.replace('/register');

        const response = await fetch(`http://localhost:3000/auth/sign-in?code=${code}`, {
            credentials: 'include'
        });

        if (response.status != 200) {
            return router.replace('/register');
        }

        return router.replace('/')
    };

    useEffect(() => {
        const code = searchParams.get('code');

        getCookies(code);
    }, []);

    return <main className="w-full h-full flex justify-center items-center">
        <SpinLoading />
    </main>
}