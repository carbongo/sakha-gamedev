import {
  SiAndroid,
  SiApple,
  SiIos,
  SiLinux,
  SiPcgamingwiki,
  SiPlaystation,
} from "@icons-pack/react-simple-icons";
import { useMemo } from "react";

interface Platform {
  type: string;
}

export const Platform = ({ type }: Platform) => {
  const IconComponent = useMemo(() => {
    if (type.includes("Linux")) return SiLinux;
    if (type.includes("PC")) return SiPcgamingwiki;
    if (type.includes("Mac")) return SiApple;
    if (type.includes("Android")) return SiAndroid;
    if (type.includes("iOS")) return SiIos;
    // if (type.includes("Xbox")) return SiXbox;
    if (type.includes("PlayStation")) return SiPlaystation;
    // if (type.includes("Nintendo")) return SiNintendo;
    return null;
  }, [type]);

  return (
    <>
      {IconComponent && (
        <IconComponent className="text-slate-500" title={type} />
      )}
    </>
  );
};
