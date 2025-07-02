import clsx from "clsx";

interface TypographyProps extends React.HTMLAttributes<HTMLSpanElement> {
  normal?: boolean;
  medium?: boolean;
  semibold?: boolean;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  base?: boolean;
  xs?: boolean;
  sm?: boolean;
  lg?: boolean;
  xl?: boolean;
  xxl?: boolean;
  xxxl?: boolean;
}

export const Typography = ({
  className,
  normal,
  medium,
  semibold,
  bold,
  italic,
  underline,
  base,
  xs,
  sm,
  lg,
  xl,
  xxl,
  xxxl,
  children,
  ...props
}: TypographyProps) => {
  const classes = clsx(
    className,
    medium && "text-md", // Adjust the size as needed
    semibold && "font-semibold",
    normal && "font-normal",
    bold && "font-bold",
    italic && "italic",
    underline && "underline",
    base && "text-base",
    xs && "text-xs", // Adjust the sizes as needed for other variants
    sm && "text-sm",
    lg && "text-lg",
    xl && "text-xl",
    xxl && "text-2xl",
    xxxl && "text-3xl"
  );
  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};
