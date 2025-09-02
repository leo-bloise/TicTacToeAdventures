import { IllegalMove } from "../../errors/IllegalMove";
import { TicTacToeBoard } from "./types/TicTacToeBoard";
import { TicTacToePlayer } from "./types/TicTacToePlayer";
import { cloneBoard } from "./utils/cloneBoard";

export function movePlayer(
    board: TicTacToeBoard, 
    player: TicTacToePlayer,
    coords: [number, number]
) {
    const yLimit = board.length;
    const xLimit = board[0].length;

    const [x, y] = coords;

    if(y >= yLimit || y < 0) throw new IllegalMove(`y: ${y} coordinate is invalid`);
    if(x >= xLimit || x < 0) throw new IllegalMove(`x: ${x} coordinate is invalid`);

    //if(board[y][x] !== undefined) throw new IllegalMove(`Already occuped!`);
    
    const newBoard = cloneBoard(board);

    newBoard[y][x] = player;

    return newBoard;
}