import Score from "./Score";

export default function Scoreboard() {
    return <div className="flex gap-x-4 items-center">
        <Score scoreName="Player X" score={0}/>
        <Score scoreName="Draw" score={0}/>
        <Score scoreName="Player Y" score={0}/>
    </div>
}