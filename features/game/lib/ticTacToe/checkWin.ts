import { TicTacToeBoard } from "./types/TicTacToeBoard";
import { TicTacToeCords } from "./types/TicTacToeCords";
import { TicTacToeMark } from "./types/TicTacToeMark";
import { TicTacToePlayer } from "./types/TicTacToePlayer";

function horizontalLineWin(mark: TicTacToeMark, y: number, board: TicTacToeBoard): boolean {
    const line = board[y];

    for(let i = 0; i < line.length; i++) if(line[i]?.mark != mark) return false;

    return true;
}

function verticalLineWin(mark: TicTacToeMark, x: number, board: TicTacToeBoard): boolean {
    for(let i = 0; i < board.length; i++) {
        const row = board[i];
        if(row[x]?.mark != mark) return false;
    }

    return true;
}

function diagonalLeftWin(mark: TicTacToeMark, board: TicTacToeBoard) {
    let x = 0;
    let y = 0;

    while(y < board.length && x < board[0].length) {
        if(board[y][x]?.mark !== mark) return false;

        x++;
        y++;
    }
    
    return true;
}

function diagonalRight(mark: TicTacToeMark, board: TicTacToeBoard) {
    let x = board[0].length - 1;
    let y = 0;

    while(x > -1 && y < board.length) {
        if(board[y][x]?.mark !== mark) return false;
        
        x--;
        y++;
    }

    return true;
}

export function checkWin(coords: TicTacToeCords, board: TicTacToeBoard,  player: TicTacToePlayer) {
    const [x, y] = coords;

    return horizontalLineWin(player.mark, y, board) || 
        verticalLineWin(player.mark, x, board) ||
        diagonalLeftWin(player.mark, board) ||
        diagonalRight(player.mark, board)
}