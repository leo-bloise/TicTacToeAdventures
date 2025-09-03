import { useMemo } from "react";
import { useGame } from "../stores/GameContext"
import { TicTacToePlayer } from "../lib/ticTacToe/types/TicTacToePlayer";
import XMark from "./XMark";
import { OMark } from "./OMark";

type Props = {
    coords: [number, number];
}

const adaptPlayerToMark = (player?: TicTacToePlayer) => {
    switch (player?.mark) { 
        case 'X': return <XMark />;
        case 'O': return <OMark />;
        default: return null;
    }
}

export default function Tile({ coords }: Props) {
    const { board, movePlayer, winner } = useGame();

    const [x, y] = coords;

    const player = useMemo(() => {
        return board[y][x];
    }, [board]);

    const handleClick = () => {
        movePlayer(coords);
    }

    return <div onClick={(player === undefined && winner === undefined) ? handleClick : undefined} className="bg-normal-tile h-30 w-30 m-1 rounded-2xl cursor-pointer flex items-center justify-center">
        {adaptPlayerToMark(player)}
    </div>
}