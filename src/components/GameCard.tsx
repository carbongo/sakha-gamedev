import type { GameData } from "../types";

interface GameCardProps extends React.HTMLAttributes<HTMLDivElement> {
  game: GameData;
}

export const GameCard = ({ game, ...props }: GameCardProps) => {
  if (!game || !game.slug) {
    return null; // Handle cases where game data is incomplete
  }
  const gameRoot = import.meta.env.BASE_URL + "games/" + game.slug + "/";
  return (
    <div
      className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer outline-1 outline-slate-200 hover:outline-2"
      {...props}
    >
      <div className="p-6 flex flex-col gap-4">
        <img
          src={game.image ? gameRoot + game.image : "/placeholder.png"}
          alt={game.title || "Game Image"}
          className="w-full h-48 object-cover rounded-xl"
        />
        <h2 className="text-xl font-bold">{game.title}</h2>
        <p className="text-slate-600 line-clamp-3">{game.description}</p>
      </div>
    </div>
  );
};
