import { TicTacToeBoard } from "@/features/game/lib/ticTacToe/types/TicTacToeBoard";
import { createContext, ReactNode, useCallback, useContext, useReducer } from "react";
import { TicTacToePlayer } from "../lib/ticTacToe/types/TicTacToePlayer";
import { GameActions } from "../lib/ticTacToe/gameActions";
import { movePlayer as movePlayerRule } from "../lib/ticTacToe/movePlayer";
import { TicTacToeTurn } from "../lib/ticTacToe/types/TicTacToeTurn";
import { nextTurn as nextTurnRule } from "../lib/ticTacToe/nextTurn";
import { checkWin } from "../lib/ticTacToe/checkWin";

type TGameContext = {
    board: TicTacToeBoard;
    movePlayer: (coords: [number, number]) => void;
    players: TicTacToePlayer[];
    start: () => void;
    winner?: TicTacToePlayer;
};

type Props = {
    children: ReactNode;
}

type ReducerData = {
    action: GameActions;
    coords?: [number, number];
}

type TGameState = {
    board: TicTacToeBoard;
    turn?: TicTacToeTurn;
    players: TicTacToePlayer[];
    winner?: TicTacToePlayer;
}

const GameContext = createContext<TGameContext>({
    board: [],
    movePlayer: () => {},
    players: [],
    start: () => {},
});

function reducer(state: TGameState, data: ReducerData): TGameState {
    const { action, coords } = data;
    const { board, turn, players, winner } = state;
    
    switch(action) {
        case GameActions.MOVE_PLAYER:            
            if(!turn) throw new Error('Turn must be defined before making a move');
            if(!coords) throw new Error(`MOVE_PLAYER must provide a coordinate to move the player`);
            if(winner) throw new Error('MOVE_PLAYER is not allowed when a winner has been decided');
            
            const newBoard = movePlayerRule(board, turn.player, coords);
            const nextTurn = nextTurnRule(players, turn);
            
            const winners = players.filter(p => checkWin(coords, newBoard, p));

            return {
                ...state,
                board: newBoard,
                turn: nextTurn,
                winner: winners.length > 0 ? winners.at(0) : undefined
            }
        case GameActions.START_GAME:
            if(turn !== undefined) throw new Error('START_GAME cannot be called after the game has started');
            
            const firstTurn = nextTurnRule(players, turn);

            return {
                ...state,
                turn: firstTurn
            }
    }
}

export function GameContextProvider({ children }: Props) {
    const [game, dispatch] = useReducer(reducer, {
        board: [
            [undefined, undefined, undefined],
            [undefined, undefined, undefined],
            [undefined, undefined, undefined]
        ],
        players: [{
            id: '1',
            mark: 'X'
        }, {
            id: '2',
            mark: 'O'
        }]
    });

    const movePlayer = useCallback((coords: [number, number]) => {
        dispatch({
            action: GameActions.MOVE_PLAYER,
            coords
        });
    }, [game.board]);

    const startGame = () => {
        dispatch({
            action: GameActions.START_GAME
        })
    };

    return <GameContext.Provider value={{
        board: game.board,
        movePlayer,
        players: game.players,
        start: startGame,
        winner: game.winner
    }}>
        {children}
    </GameContext.Provider>
}

export function useGame(): TGameContext {
    return useContext(GameContext);
}