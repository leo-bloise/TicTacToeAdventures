type Props = {
    searchParams: Promise<{
        [key: string]: string | string[] | undefined
    }>
}

export default async function Page({ searchParams }: Props) {
    const code = (await searchParams).code;

    return <div>
        {code}
    </div>
}