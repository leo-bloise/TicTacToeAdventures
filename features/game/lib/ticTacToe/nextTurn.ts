import { TicTacToePlayer } from "./types/TicTacToePlayer";
import { TicTacToeTurn } from "./types/TicTacToeTurn";

export function nextTurn(players: TicTacToePlayer[], currTurn?: TicTacToeTurn): TicTacToeTurn {
    if(currTurn === undefined) return {
        player: players[0]
    };

    const { player } = currTurn;
    
    return {
        player: players.filter(p => p.id !== player.id)[0]
    }
}