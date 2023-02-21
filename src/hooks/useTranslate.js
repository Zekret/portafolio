import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineArrowDown, AiOutlineMenu } from "react-icons/ai";
import es from "../assets/translate/es.png";
import en from "../assets/translate/en.png";

export const useTranslate = ({ mobile }) => {
  const [showLng, setShowLng] = useState(false);
  const [t, i18n] = useTranslation("global");

  const handlerButton = () => {
    if (showLng === false) {
      setShowLng(true);
    }
    if (showLng === true) {
      setShowLng(false);
    }
  };

  const renderTranslator = () => {
    if (mobile) {
      if (i18n.translator.language === "es") {
        return (
          <>
            <AiOutlineMenu className="tw-p-1" size={25} />
            <img className="tw-w-6 tw-h-6 tw-rounded-full" src={es} alt="es" />
          </>
        );
      } else {
        return (
          <>
            <AiOutlineMenu className="tw-p-1" size={25} />
            <img className="tw-w-6 tw-h-6 tw-rounded-full" src={en} alt="en" />
          </>
        );
      }
    } else {
      return (
        <>
          {i18n.translator.language === "es" ? "Idioma" : "Language"}
          <AiOutlineArrowDown className="tw-p-1" size={25} />
        </>
      );
    }
  };

  return { showLng, setShowLng, handlerButton, renderTranslator, t, i18n };
};
