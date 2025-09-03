'use client';

import Board from "@/features/game/components/Board";
import { OMark } from "@/features/game/components/OMark";
import Scoreboard from "@/features/game/components/Scoreboard";
import XMark from "@/features/game/components/XMark";
import { GameContextProvider } from "@/features/game/stores/GameContext";

export default function Page() {
  return <div className="flex flex-col items-center gap-10">
    <GameContextProvider>
      <Scoreboard />
      <Board />
    </GameContextProvider>
  </div>
}