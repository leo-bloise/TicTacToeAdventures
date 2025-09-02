import Board from "@/components/Board";
import Scoreboard from "@/components/Scoreboard";

export default function Page() {
  return <div className="flex flex-col items-center gap-10">
    <Scoreboard />
    <Board />
  </div>
}