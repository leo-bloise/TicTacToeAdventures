type Props = {
    searchParams: Promise<{
        [key: string]: string | string[] | undefined
    }>
}

export default async function Page({ searchParams }: Props) {
    const code = (await searchParams).code;

    const getToken = async () => {
        const response = await fetch(`http://localhost:3000/auth/sign-in?code=${code}`);
        const token = await response.json();
        
        return token.token;
    }

    const token = await getToken();

    return <div>
        <p className="text-white">Code: {code}</p>
        <p className="text-white">Token: {token}</p>
    </div>
}