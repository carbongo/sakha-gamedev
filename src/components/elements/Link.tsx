import { Typography } from "./Typography";

export const Link = ({
  children,
  ...props
}: React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) => {
  return (
    <a {...props}>
      <Typography base normal className="text-slate-600 underline inline-block">
        {children}
      </Typography>
    </a>
  );
};
