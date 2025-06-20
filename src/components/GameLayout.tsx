import type { GameData } from "../types";
import { Platform } from "./Platform";
import { StoreLink } from "./StoreLink";

interface GameCardProps {
  game: GameData;
}

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6 flex flex-col gap-4">
        <img
          src={
            game.slug && game.image
              ? import.meta.env.BASE_URL + game.slug + game.image
              : "/placeholder.png"
          }
          alt={game.title || "Game Image"}
          className="w-full h-48 object-cover rounded-xl"
        />
        <h2 className="text-xl font-bold">{game.title}</h2>
        <p className="text-slate-600 line-clamp-3">{game.description}</p>

        <div>
          <strong className="text-slate-600">Genre:</strong> {game.genre}
        </div>
        <div className="space-y-1 flex flex-wrap gap-2">
          {game.platforms &&
            game.platforms.map((platform, index) => (
              <Platform type={platform} key={index} />
            ))}
        </div>
        <div className="space-y-1 flex flex-wrap gap-2">
          {game.storeLinks &&
            game.storeLinks.map((storeLink, index) => {
              return (
                <StoreLink
                  type={storeLink.name}
                  link={storeLink.link}
                  key={index}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
