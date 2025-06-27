import type { IconType } from "@icons-pack/react-simple-icons";
import { clsx } from "clsx";
import React from "react";

type ButtonProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  iconLeft?: IconType | ((props: any) => React.JSX.Element);
  iconRight?: IconType;
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  iconLeft: IconLeft,
  iconRight: IconRight,
  onClick,
  href,
  children,
}) => {
  const ButtonTag = href ? "a" : "button";
  const iconClasses = clsx("w-6 h-6 text-slate-100");
  return (
    <ButtonTag
      className={clsx(
        "flex items-center justify-center px-6 py-4 border-none rounded-3xl cursor-pointer bg-slate-400 hover:opacity-90 text-slate-100"
      )}
      onClick={onClick}
    >
      {IconLeft && (
        <span className="mr-2">
          <IconLeft className={iconClasses} />
        </span>
      )}
      {children}
      {IconRight && (
        <span className="ml-2">
          <IconRight className={iconClasses} />
        </span>
      )}
    </ButtonTag>
  );
};

export default Button;
