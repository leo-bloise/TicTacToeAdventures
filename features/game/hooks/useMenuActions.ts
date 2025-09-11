export function useMenuActions() {
    const handlePlayClick = () => {
        fetch('/matchmaking')
    }

    return {
        handlePlayClick
    }
}