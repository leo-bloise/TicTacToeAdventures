import Menu from "@/features/game/components/Menu";

export default function Page() {
    return <article className="flex items-center flex-col justify-center gap-y-10">
        <header>
            <h1 className="text-4xl font-bold text-white"> TicTacToe Adventures</h1>
        </header>
        <main>
            <Menu />
        </main>
    </article>
}