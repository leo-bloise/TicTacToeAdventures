const ItemList = ({ item }: { item: string }) => {
    return <li>
        <button className="min-w-48 bg-amber-500 p-2 rounded-md">
            {item}
        </button>
    </li>
}

export default function Page() {
    return <article className="flex items-center flex-col justify-center gap-y-10">
        <header>
            <h1 className="text-4xl font-bold text-white"> TicTacToe Adventures</h1>
        </header>
        <main>
            <nav>
                <ul className="flex flex-col gap-y-4">
                    <ItemList item="Play Multiplayer" />
                    <ItemList item="Exit" />
                </ul>
            </nav>
        </main>
    </article>
}