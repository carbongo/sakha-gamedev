export const Header = () => {
  return (
    <header className="bg-slate-200 rounded-3xl shadow-md overflow-hidden    outline-1 outline-slate-300 w-full p-6 flex flex-col gap-4">
      <h1 className="text-xl font-bold text-slate-900 flex">
        Sakha GameDev<small className="text-sm text-slate-500">beta</small>
      </h1>
      <p className="text-slate-600 block">
        A community-driven list of games made by Sakha developers.
        <br />
        Support our Sakha developers by playing their games and sharing your
        feedback!
      </p>
    </header>
  );
};
