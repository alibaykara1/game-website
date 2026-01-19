export interface Game {
    id: string;
    title: string;
    description: string;
    thumbnail?: string; // URL to an image
    exportPath: string; // Path to the index.html of the Godot export, relative to public/games/
    dateAdded: string;
}

export const GAMES: Game[] = [
    {
        id: "demo-game",
        title: "Demo Adventure",
        description: "A simple demonstration of the Godot Web Export capabilities. Explore the void!",
        // thumbnail: "/games/demo-game/thumbnail.png", // We can add this later
        exportPath: "demo-game/index.html",
        dateAdded: "2024-01-20",
    },
    {
        id: "knight",
        title: "Knight",
        description: "A simple demonstration of the Godot Web Export capabilities. Explore the void!",
        // thumbnail: "/games/demo-game/thumbnail.png", // We can add this later
        exportPath: "knight/index.html",
        dateAdded: "2024-01-20",
    },
    // Add more games here in the future
];

export function getGameById(id: string): Game | undefined {
    return GAMES.find((game) => game.id === id);
}
