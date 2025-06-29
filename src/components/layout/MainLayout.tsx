import React from "react";
import { Header } from "@layout/Header";

interface MainLayout extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const MainLayout = ({ children, ...props }: MainLayout) => {
  return (
    <div className="min-h-screen bg-slate-100 m-0 w-full" {...props}>
      <div className="flex flex-col max-w-6xl m-auto md:p-6 p-4 gap-5">
        <Header />
        <main className="flex-1 m-0 p-0">{children}</main>
      </div>
    </div>
  );
};
