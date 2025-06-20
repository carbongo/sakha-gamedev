import clsx from "clsx";

interface StoreLink extends React.HTMLAttributes<HTMLDivElement> {
  type: string;
  link: string;
}

export const StoreLink = ({ type, link, ...props }: StoreLink) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        className={clsx([
          "inline-block text-slate-100 bg-slate-800 p-2 rounded-lg m-0",
        ])}
        {...props}
      >
        {type}
      </div>
    </a>
  );
};
