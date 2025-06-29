// src/App.tsx
import type { GameData } from "./types";

import { MainLayout } from "@layout/MainLayout";
import { GameList } from "@layout/GameList";
import { GameCard } from "@ui/GameCard";
import { GameDialog } from "@ui/GameDialog";

import gamesData from "./data/games.json";
import { useEffect, useState } from "react";

export default function App() {
  const [currentGame, setCurrentGame] = useState<GameData>();
  const [isOpen, setIsOpen] = useState(false);
  // const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (window) {
      const game = new URLSearchParams(window.location.search).get("game");
      if (game) {
        const foundGame = gamesData.find(
          (g: GameData) => g.slug === game.split(" ").join("%20")
        );
        setIsOpen(true);
        setCurrentGame(foundGame || undefined);
      } else {
        setCurrentGame(undefined);
      }
    }
  }, []);

  const onGameCardClick = (game: GameData) => {
    if (game) {
      setIsOpen(true);
      setCurrentGame(game);
      window.history.pushState({}, "", "?game=" + game.slug);
    } else {
      setCurrentGame(undefined);
      window.history.pushState({}, "", "?game=");
    }
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
    setCurrentGame(undefined);
    window.history.pushState({}, "", "?game=");
  };

  return (
    <MainLayout>
      <GameList>
        {gamesData.map((game: GameData, index) => {
          if (game.slug === "_Template") {
            return null; // Skip placeholder games
          }
          return (
            <GameCard
              {...{ game }}
              onClick={() => onGameCardClick(game)}
              key={index}
            />
          );
        })}
      </GameList>
      <GameDialog game={currentGame} {...{ handleCloseDialog, isOpen }} />
    </MainLayout>
  );
}
