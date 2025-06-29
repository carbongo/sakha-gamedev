import clsx from "clsx";
import { useTranslation } from "react-i18next";
import Button from "@elements/Button";

const LanguageDialog = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const { i18n } = useTranslation();

  return (
    <>
      <div
        className={clsx(
          "w-screen h-screen fixed p-0 m-0 top-0 left-0 right-0 bottom-0 z-40 transition-opacity duration-300 cursor-pointer",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
      ></div>
      <div
        className={clsx(
          "bg-white rounded-3xl shadow-lg/5 overflow-hidden absolute m-auto max-w-3xl z-50 p-4 transition-[opacity, transform, shadow] duration-300 flex flex-col gap-4 origin-top w-full",
          open
            ? "opacity-100 scale-100"
            : "pointer-events-none opacity-0 scale-95"
        )}
      >
        <Button
          onClick={() => {
            i18n.changeLanguage("en");
            onClose();
          }}
          appearance="secondary"
        >
          English
        </Button>
        <Button
          onClick={() => {
            i18n.changeLanguage("sah");
            onClose();
          }}
          appearance="secondary"
        >
          Сахалыы
        </Button>
        <Button
          onClick={() => {
            i18n.changeLanguage("ru");
            onClose();
          }}
          appearance="secondary"
        >
          Русский
        </Button>
      </div>
    </>
  );
};

export default LanguageDialog;
