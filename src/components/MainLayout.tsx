import React from "react";

interface MainLayout extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const MainLayout = ({ children, ...props }: MainLayout) => {
  return (
    <div
      className="flex flex-col min-h-screen bg-slate-100 m-0 w-full"
      {...props}
    >
      <header className="flex flex-col gap-6 p-8 text-center">
        <h1 className="text-2xl font-bold text-center flex items-center gap-2 justify-center">
          Sakha GameDev<small className="text-sm text-slate-400">beta</small>
        </h1>
        <p className="text-center text-slate-600 block">
          A community-driven list of games made by Sakha developers.
          <br /> Support our Sakha developers by playing their games and sharing
          your feedback!
        </p>
        <p className="text-center text-slate-400 block">
          Made with ❤️ by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://carbongo.space"
            className="underline text-slate-500"
          >
            Georgii Antipin
          </a>
          . Contribute on{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/carbongo/sakha-gamedev"
            className="underline text-slate-500"
          >
            GitHub
          </a>
        </p>
      </header>
      <main className="flex-1 m-0 p-0">
        <div className="container mx-auto p-4">{children}</div>
      </main>
    </div>
  );
};
