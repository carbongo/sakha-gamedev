import React from "react";

interface MainLayout extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const MainLayout = ({ children, ...props }: MainLayout) => {
  return (
    <div
      className="flex flex-col h-screen bg-slate-100 p-4 w-screen gap-4"
      {...props}
    >
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-center">Sakha GameDev</h1>
        <p className="text-center text-slate-600">
          A community-driven list of games made by Sakha developers.
          <br /> Support our Sakha developers by playing their games and sharing
          your feedback!
        </p>
      </header>
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto py-4">{children}</div>
      </main>
      <footer className="text-center text-sm text-slate-600 flex gap-2 flex-col">
        {/* <nav className="text-center flex gap-2 justify-center">
          <a href="/" className="text-slate-900 hover:underline mx-2">
            Our Games
          </a>
          <a href="#about" className="text-slate-900 hover:underline mx-2">
            About Us
          </a>
          <a href="#contribute" className="text-slate-900 hover:underline mx-2">
            Contribute
          </a>
        </nav> */}
        <p>
          @ {new Date().getFullYear()} Sakha GameDev Community. Contribute on{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/carbongo/sakha-gamedev"
            className="underline text-slate-900"
          >
            GitHub
          </a>
          .
        </p>
      </footer>
    </div>
  );
};
