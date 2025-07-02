import {
  faAndroid,
  faApple,
  faAppStoreIos,
  faLinux,
  faPlaystation,
  faWindows,
  faXbox,
} from "@fortawesome/free-brands-svg-icons";
import { faCircle, faVrCardboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo } from "react";

interface Platform {
  type: string;
}

export const Platform = ({ type }: Platform) => {
  const icon = useMemo(() => {
    if (type.includes("Linux")) return faLinux;
    if (type.includes("PC")) return faWindows;
    if (type.includes("Mac")) return faApple;
    if (type.includes("Android")) return faAndroid;
    if (type.includes("iOS")) return faAppStoreIos;
    if (type.includes("Xbox")) return faXbox;
    if (type.includes("PlayStation")) return faPlaystation;
    if (type.includes("Nintendo")) return faCircle;
    if (type.includes("VR")) return faVrCardboard;
    return null;
  }, [type]);

  return (
    <>
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          className="text-slate-500 !w-6 !h-6"
          title={type}
        />
      )}
    </>
  );
};
