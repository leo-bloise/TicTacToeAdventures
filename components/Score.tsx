type Props = {
    scoreName: string;
    score: number;
}

export default function Score({ scoreName, score }: Props) {
    return <div className="h-30 w-30 bg-yellow-500 rounded-xl flex flex-col items-center justify-center gap-y-2">
        <span className="text-lg">{scoreName}</span>
        <span className="font-bold text-3xl">{score}</span>
    </div>
}