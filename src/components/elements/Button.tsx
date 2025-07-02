import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { clsx } from "clsx";
import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  iconLeft?: IconDefinition;
  iconRight?: IconDefinition;
  iconRightClassName?: string;
  iconLeftClassName?: string;
  onClick?: () => void;
  appearance?: "primary" | "secondary";
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  iconLeft,
  iconRight,
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
  const iconClasses = clsx("!w-4 !h-4 text-slate-100");
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
      {iconLeft && (
        <span className="mr-2">
          <FontAwesomeIcon
            icon={iconLeft}
            className={
              iconClasses + (iconLeftClassName ? " " + iconLeftClassName : "")
            }
          />
        </span>
      )}
      {children}
      {iconRight && (
        <span className="ml-2">
          <FontAwesomeIcon
            icon={iconRight}
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
