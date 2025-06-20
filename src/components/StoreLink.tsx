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
          "inline-block text-slate-600 bg-slate-100 p-2 rounded-lg",
          (type.includes("PC") ||
            type.includes("Mac") ||
            type.includes("Linux")) &&
            "!bg-slate-100",
          (type.includes("Android") || type.includes("iOS")) && "!bg-sky-100",
          (type.includes("Xbox") ||
            type.includes("PlayStation") ||
            type.includes("Nintendo")) &&
            "!bg-blue-100",
          (type.includes("AR") || type.includes("VR") || type.includes("XR")) &&
            "!bg-indigo-100",
        ])}
        {...props}
      >
        {type}
      </div>
    </a>
  );
};
