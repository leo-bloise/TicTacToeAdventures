'use client';

import Board from "@/features/game/components/Board";
import Scoreboard from "@/features/game/components/Scoreboard";
import { GameContextProvider } from "@/features/game/stores/GameContext";

export default function Page() {
  return <div className="flex flex-col items-center gap-10">
    <GameContextProvider>
      <Scoreboard />
      <Board />
    </GameContextProvider>
  </div>
}