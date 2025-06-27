import { SiGithub, SiTelegram } from "@icons-pack/react-simple-icons";
import Button from "./Button";
import { Translate } from "@nine-thirty-five/material-symbols-react/outlined";

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
      <nav className="flex gap-4">
        <div>
          <Button href="https://t.me/gamedev_yakutia" iconRight={SiTelegram}>
            Community on Telegram
          </Button>
          <Button href="https://t.me/gamedev_yakutia" iconRight={SiGithub}>
            Contribute on GitHub
          </Button>
        </div>
        <div>
          <Button iconLeft={Translate}>English</Button>
        </div>
      </nav>
    </header>
  );
};
