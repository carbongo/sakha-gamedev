import Button from "@elements/Button";
import { useTranslation } from "react-i18next";
import LanguageDialog from "@ui/LanguageDialog";
import { useState } from "react";
import { faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown, faLanguage } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const { t } = useTranslation();
  const [languagesOpen, setLanguagesOpen] = useState(false);
  const handleLanguagesClick = () => {
    setLanguagesOpen(!languagesOpen);
  };

  return (
    <header className="bg-slate-200 rounded-3xl shadow-md outline-1 outline-slate-300 w-full p-6 flex flex-col gap-4">
      <h1 className="text-xl font-bold text-slate-900 flex">
        {t("header.title")}
        <small className="text-sm text-slate-500">{t("header.beta")}</small>
      </h1>
      <p className="text-slate-600 block whitespace-pre-line">
        {t("header.description")}
      </p>
      <nav className="flex gap-4 justify-between flex-col md:flex-row">
        <div className="flex gap-4 flex-col sm:flex-row w-full">
          <Button
            href="https://t.me/gamedev_yakutia"
            iconRight={faTelegram}
            className="flex-grow md:flex-grow-0"
          >
            {t("header.links.telegram")}
          </Button>
          <Button
            href="https://github.com/carbongo/sakha-gamedev"
            iconRight={faGithub}
            className="flex-grow md:flex-grow-0"
          >
            {t("header.links.github")}
          </Button>
        </div>
        <div className="flex-col sm:flex-row m-auto md:m-0 relative">
          <LanguageDialog open={languagesOpen} onClose={handleLanguagesClick} />
          <Button
            iconLeft={faLanguage}
            iconRight={faArrowDown}
            iconLeftClassName="text-slate-500"
            iconRightClassName="-mr-2 text-slate-500"
            appearance="secondary"
            onClick={handleLanguagesClick}
          >
            {t("languageName")}
          </Button>
        </div>
      </nav>
    </header>
  );
};
