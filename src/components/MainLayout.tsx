interface MainLayout extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const MainLayout = ({ children, ...props }: MainLayout) => {
  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4 w-screen" {...props}>
      {children}
    </div>
  );
};
