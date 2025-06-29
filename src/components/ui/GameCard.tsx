import { useTranslation } from "react-i18next";
import type { GameData } from "@/types";
import { DateTime } from "luxon";

interface GameCardProps extends React.HTMLAttributes<HTMLDivElement> {
  game: GameData;
}

export const GameCard = ({ game, ...props }: GameCardProps) => {
  const { t, i18n } = useTranslation();
  if (!game || !game.slug) {
    return null; // Handle cases where game data is incomplete
  }
  const gameRoot = import.meta.env.BASE_URL + "games/" + game.slug + "/";

  return (
    <div
      className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer outline-1 outline-slate-200 hover:outline-2"
      {...props}
    >
      <div className="p-6 flex flex-col justify-between gap-4 h-full">
        <div className="flex flex-col gap-4">
          {game.image && (
            <img
              src={game.image ? gameRoot + game.image : "/placeholder.png"}
              alt={game.title || t("game.imgAlt")}
              className="w-full h-48 object-cover rounded-xl"
            />
          )}
          {game.title && <h2 className="text-xl font-bold">{game.title}</h2>}
          {game.description && (
            <p className="text-slate-600 line-clamp-3">{game.description}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          {game.devs && (
            <p className="text-slate-400 line-clamp-3">
              {game.devs.map((dev) => dev.name)}
            </p>
          )}
          {game.released && (
            <p className="text-slate-400 line-clamp-3">
              {DateTime.fromISO(game.released as string).isValid
                ? DateTime.fromISO(game.released as string).toLocaleString(
                    {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    },
                    { locale: i18n.language }
                  )
                : game.released}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
