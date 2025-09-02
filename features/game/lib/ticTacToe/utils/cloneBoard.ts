import { TicTacToeBoard } from "../types/TicTacToeBoard";

export function cloneBoard(board: TicTacToeBoard): TicTacToeBoard {
    const newBoard: TicTacToeBoard = [];

    board.forEach(row => {
        const newRow = [];

        row.forEach(column => {
            newRow.push(column);
        });

        newBoard.push(row);
    });

    return newBoard;
}