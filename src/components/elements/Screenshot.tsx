import clsx from "clsx";
import { useState } from "react";

interface ScreenshotProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export const Screenshot = ({
  src,
  alt,
  className,
  ...props
}: ScreenshotProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={clsx([
          "cursor-pointer rounded-lg shadow-md transition-shadow hover:shadow-xl outline-1 outline-slate-300 hover:outline-2",
          className,
        ])}
        onClick={() => setIsOpen(true)}
        {...props}
      />

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-screen object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </>
  );
};
