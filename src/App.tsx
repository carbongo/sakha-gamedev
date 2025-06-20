// src/App.tsx
import type { GameData } from "./types";

import { MainLayout } from "./components/MainLayout";
import { GameList } from "./components/GameList";
import { GameCard } from "./components/GameCard";

import gamesData from "./data/games.json";
import { useEffect, useState } from "react";

export default function App() {
  const [currentGame, setCurrentGame] = useState<GameData | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  // const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (window) {
      console.log(new URLSearchParams(window.location.search).get("game"));
    }
  });

  return (
    <MainLayout>
      <GameList>
        {gamesData.map((game: GameData) => (
          <GameCard {...{ game }} onClick={() => setCurrentGame(game)} />
        ))}
      </GameList>
    </MainLayout>
  );
}
