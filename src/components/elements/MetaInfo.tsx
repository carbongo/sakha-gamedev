import type { ReactNode } from "react";
import { Typography } from "./Typography";

interface MetaInfoProps
  extends React.PropsWithChildren<
    Omit<React.HTMLAttributes<HTMLDivElement>, "title">
  > {
  title?: ReactNode;
}

export const MetaInfo = ({ title, children, ...props }: MetaInfoProps) => {
  return (
    (title || children) && (
      <div className="flex flex-wrap gap-2" {...props}>
        {title && (
          <>
            <Typography base normal className="text-slate-600">
              {title}:
            </Typography>{" "}
          </>
        )}
        <Typography base normal className="text-slate-400">
          {children && children}
        </Typography>
      </div>
    )
  );
};
