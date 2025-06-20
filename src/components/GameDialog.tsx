import clsx from "clsx";
import type { GameData } from "../types";
import { Platform } from "./Platform";
import { StoreLink } from "./StoreLink";

interface GameDialogProps extends React.HTMLAttributes<HTMLDivElement> {
  game?: GameData;
  handleCloseDialog: () => void;
  isOpen?: boolean;
}

export const GameDialog = ({
  game,
  handleCloseDialog,
  isOpen = false,
  ...props
}: GameDialogProps) => {
  const gameRoot = import.meta.env.BASE_URL + "games/" + game?.slug + "/";

  return (
    <>
      <div
        className={clsx(
          "w-screen h-screen bg-slate-800/30 backdrop-blur-lg fixed p-0 m-0 top-0 left-0 right-0 bottom-0 z-40 transition-opacity duration-300 cursor-pointer",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => handleCloseDialog()}
      ></div>
      <div
        className={clsx(
          "bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg  fixed m-auto top-4 left-4 right-4 bottom-4 md:bottom-8 md:top-8 md:left-8 md:right-8 max-w-3xl z-50 p-4 transition-[opacity, transform, shadow] duration-300",
          isOpen
            ? "opacity-100 scale-100"
            : "pointer-events-none opacity-0 scale-95"
        )}
        {...props}
      >
        <div className="p-6 flex flex-col gap-4 overflow-x-hidden overflow-y-auto h-full">
          <button
            className="absolute top-4 right-4 text-slate-600 hover:text-slate-900"
            onClick={handleCloseDialog}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {game && (
            <>
              <img
                src={
                  game.slug && game.image
                    ? gameRoot + game.image
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
            </>
          )}
        </div>
      </div>
    </>
  );
};
