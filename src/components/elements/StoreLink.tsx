import {
  faAppStore,
  faGooglePlay,
  faSteam,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

interface StoreLink extends React.HTMLAttributes<HTMLDivElement> {
  type: string;
  link: string;
}

export const StoreLink = ({ type, link, ...props }: StoreLink) => {
  const iconsMap = {
    Steam: faSteam,
    "Epic Games": faChevronDown,
    "App Store": faAppStore,
    "Google Play": faGooglePlay,
  };

  const icon = iconsMap[type as keyof typeof iconsMap];

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        className={clsx([
          "inline-block text-slate-100 bg-slate-800 p-2 rounded-lg m-0",
        ])}
        {...props}
      >
        {icon ? <FontAwesomeIcon icon={icon} /> : type}
      </div>
    </a>
  );
};
