import { TicTacToeRow } from "@/types/TicTacToeBoard"
import Tile from "./Tile";

type Props = {
    row: TicTacToeRow;
}

export default function Row({ row }: Props) {
    return <div className="flex gap-2"> {
            row.map((column, indexColumn) =>
                <Tile key={indexColumn} />
            )
        }
    </div>
}