import { TicTacToeRow } from "@/features/game/lib/ticTacToe/types/TicTacToeBoard"
import Tile from "./Tile";

type Props = {
    row: TicTacToeRow;
    indexRow: number;
}

export default function Row({ row, indexRow }: Props) {
    return <div className="flex gap-2"> {
            row.map((column, indexColumn) =>
                <Tile 
                    coords={[indexColumn, indexRow]} 
                    key={`${indexRow}-${indexColumn}`} 
                />
            )
        }
    </div>
}