'use client';

import { useState } from "react";
import Tile from "./Tile";
import { TicTacToeBoard } from "@/types/TicTacToeBoard";
import Row from "./Row";

export default function Board() {
    const [board, setBoard] = useState<TicTacToeBoard>([
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]);

    return <div className="flex flex-col items-center">
        {board.map((row, indexRow) => <Row row={row} key={indexRow} />)}
    </div>
}