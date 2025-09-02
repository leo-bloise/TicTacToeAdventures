import { useMemo } from "react";
import { useGame } from "../stores/GameContext"

type Props = {
    coords: [number, number];
}

export default function Tile({ coords }: Props) {
    const { board, movePlayer } = useGame();

    const [x, y] = coords;

    const player = useMemo(() => {
        return board[y][x];
    }, [board]);

    const handleClick = () => {
        movePlayer(coords);
    }

    return <div onClick={player === undefined ? handleClick : undefined} className="bg-normal-tile h-30 w-30 m-1 rounded-2xl">
        {player && <span>{player.mark}</span>}
    </div>
}