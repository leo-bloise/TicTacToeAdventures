'use client';

import { useEffect } from "react";
import { useGame } from "../stores/GameContext";
import Row from "./Row";

export default function Board() {
    const { board, start } = useGame();

    useEffect(() => {
        start();
    }, []);

    return <div className="flex flex-col items-center">
        {board.map((row, indexRow) => <Row indexRow={indexRow} row={row} key={indexRow} />)}
    </div>
}