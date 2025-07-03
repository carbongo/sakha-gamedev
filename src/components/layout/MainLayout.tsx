import React from "react";
import { Header } from "@layout/Header";
import backgroundImage from "@assets/background.svg";

interface MainLayout extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const MainLayout = ({ children, ...props }: MainLayout) => {
  return (
    <div className="min-h-screen m-0 w-full" {...props}>
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="fixed top-0 left-0 w-screen h-screen -z-10 bg-slate-100 bg-blend-soft-light"
      ></div>
      <div className="flex flex-col max-w-6xl m-auto md:p-6 p-4 gap-5">
        <Header />
        <main className="flex-1 m-0 p-0">{children}</main>
      </div>
    </div>
  );
};
