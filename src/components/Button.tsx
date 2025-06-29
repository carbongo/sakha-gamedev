import type { IconType } from "@icons-pack/react-simple-icons";
import { clsx } from "clsx";
import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  iconLeft?: IconType | ((props: any) => React.JSX.Element);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  iconRight?: IconType | ((props: any) => React.JSX.Element);
  iconRightClassName?: string;
  iconLeftClassName?: string;
  onClick?: () => void;
  appearance?: "primary" | "secondary";
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  iconLeft: IconLeft,
  iconRight: IconRight,
  iconRightClassName,
  iconLeftClassName,
  onClick,
  appearance = "primary",
  href,
  children,
  className,
  ...props
}) => {
  const ButtonTag = href ? "a" : "button";
  const iconClasses = clsx("w-6 h-6 text-slate-100");
  const buttonClasses = {
    primary:
      "bg-slate-400 text-slate-100 hover:outline hover:outline-slate-300 hover:opacity-90 transition-opacity duration-150",
    secondary:
      "bg-slate-200 hover:bg-slate-100 text-slate-500 hover:opacity-90 transition-opacity duration-300",
  };

  return (
    <ButtonTag
      className={clsx(
        "flex items-center justify-center px-6 py-4 outline outline-transparent rounded-3xl cursor-pointer",
        buttonClasses[appearance],
        className
      )}
      href={href}
      onClick={onClick}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      {...props}
    >
      {IconLeft && (
        <span className="mr-2">
          <IconLeft
            className={
              iconClasses + (iconLeftClassName ? " " + iconLeftClassName : "")
            }
          />
        </span>
      )}
      {children}
      {IconRight && (
        <span className="ml-2">
          <IconRight
            className={
              iconClasses + (iconRightClassName ? " " + iconRightClassName : "")
            }
          />
        </span>
      )}
    </ButtonTag>
  );
};

export default Button;
