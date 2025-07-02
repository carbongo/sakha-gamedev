import {
  SiAppstore,
  SiEpicgames,
  SiGoogleplay,
  SiSteam,
} from "@icons-pack/react-simple-icons";
import clsx from "clsx";

interface StoreLink extends React.HTMLAttributes<HTMLDivElement> {
  type: string;
  link: string;
}

export const StoreLink = ({ type, link, ...props }: StoreLink) => {
  const iconsMap = {
    Steam: SiSteam,
    "Epic Games": SiEpicgames,
    "App Store": SiAppstore,
    "Google Play": SiGoogleplay,
  };

  const IconComponent = iconsMap[type as keyof typeof iconsMap];

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        className={clsx([
          "inline-block text-slate-100 bg-slate-800 p-2 rounded-lg m-0",
        ])}
        {...props}
      >
        {IconComponent ? <IconComponent /> : type}
      </div>
    </a>
  );
};
