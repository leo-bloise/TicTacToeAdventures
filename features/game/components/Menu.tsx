'use client';

import { useMenuActions } from "../hooks/useMenuActions";

export default function Menu() {
    const { handlePlayClick } = useMenuActions();

    return <nav>
        <ul className="flex flex-col gap-y-4">
            <button onClick={handlePlayClick} className="min-w-48 bg-amber-500 p-2 rounded-md">
                Play Multiplayer
            </button>
            <button className="min-w-48 bg-amber-500 p-2 rounded-md">
                Exit
            </button>
        </ul>
    </nav>
}