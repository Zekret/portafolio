import "../styles/header.css";
import About from "../components/About";
import Header from "../components/Header";
import Proyects from "../components/Proyects";
import Skills from "../components/Skills";
import {
  AiOutlineArrowDown,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import Translate from "../components/Translate";
import Footer from "../components/Footer";
import { useMediaQuery } from "@material-ui/core";
import codeIcon from "../assets/progra.png";
import Button from "../components/button/Button";
import "../styles/header.css";
import { useScroll } from "../hooks/useScroll";
import { useTranslate } from "../hooks/useTranslate";

const Main = () => {
  const mobile = useMediaQuery("(max-width: 420px)");
  const mobileHeight = useMediaQuery("(max-height: 720px");
  const { sticky, about, skills, proyects, refContainer, scrollToSection } = useScroll();
  const { showLng, setShowLng, handlerButton, renderTranslator, t, i18n } = useTranslate({ mobile })
  
  return (
    <div>
      <div className="tw-absolute tw-top-4 tw-left-2 xs:tw-left-8 xs:tw-top-8">
        <Button
          onClick={() => handlerButton()}
          label={renderTranslator()}
          buttonClass={false}
          className={
            !mobile
              ? "tw-cursor-pointer tw-flex tw-flex-row tw-bg-transparent hover:tw-bg-blue-500 tw-text-blue-700 tw-font-semibold hover:tw-text-white tw-py-2 tw-px-2 xs:tw-px-8 tw-border tw-border-blue-500 hover:tw-border-transparent tw-rounded-3xl tw-font-monserrat"
              : "tw-flex tw-flex-row tw-gap-2 tw-font-monserrat"
          }
        />
        {showLng && (
          <>
            {i18n.translator.language === "es" && (
              <Translate
                mobile={mobile}
                setShowLng={setShowLng}
                i18n={i18n}
                translate={"EN"}
              />
            )}
            {i18n.translator.language === "en" && (
              <Translate
                mobile={mobile}
                setShowLng={setShowLng}
                i18n={i18n}
                translate={"ES"}
              />
            )}
          </>
        )}
      </div>
      <div className="tw-absolute tw-top-2 xs:tw-top-8 tw-right-2 xs:tw-right-8 tw-flex tw-flex-row tw-gap-4">
        <a
          target="_blank"
          rel="noreferrer"
          className={
            !mobile &&
            "tw-no-underline tw-cursor-pointer tw-flex tw-flex-row tw-bg-transparent hover:tw-bg-blue-500 tw-text-blue-700 tw-font-semibold hover:tw-text-white tw-py-2 tw-px-4 xs:tw-px-8 tw-border tw-border-blue-500 hover:tw-border-transparent tw-rounded-3xl tw-font-monserrat"
          }
          href="https://github.com/Zekret"
        >
          {!mobile && "GitHub"}
          <AiOutlineGithub className="tw-p-1" size={mobile ? 35 : 25} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className={
            !mobile &&
            "tw-no-underline tw-cursor-pointer tw-flex tw-flex-row tw-bg-transparent hover:tw-bg-blue-500 tw-text-blue-700 tw-font-semibold hover:tw-text-white tw-py-2 tw-px-4 xs:tw-px-8 tw-border tw-border-blue-500 hover:tw-border-transparent tw-rounded-3xl tw-font-monserrat"
          }
          href="https://www.linkedin.com/in/jonatan-benjamin-336982249/"
        >
          {!mobile && "Linked"}
          <AiFillLinkedin className="tw-p-1" size={mobile ? 35 : 25} />
        </a>
      </div>
      <div
        ref={refContainer}
        className="tw-h-screen tw-flex tw-flex-col tw-justify-center tw-items-center"
      >
        <div className="tw-flex tw-flex-col tw-text-center">
          <img
            src={codeIcon}
            className="tw-w-40 xs:tw-w-60 tw-h-40 xs:tw-h-60 tw-self-center"
            alt="icono"
          />
          <h1 className="tw-font-monserratextra tw-text-4xl">
            Jonatan Concha Camacho
          </h1>
          <h2 className="tw-font-monserratbold tw-font-semibold tw-text-xl tw-mt-3">
            {t("main.job")}
          </h2>
        </div>
        <div className="tw-flex tw-flex-row tw-mt-5 tw-gap-4 tw-font-medium tw-text-base">
          <Button
            buttonClass
            label={t("main.about")}
            onClick={() => scrollToSection(about)}
          />
          <Button
            buttonClass
            label={t("main.skills")}
            onClick={() => scrollToSection(skills)}
          />
          <Button
            buttonClass
            label={t("main.proyects")}
            onClick={() => scrollToSection(proyects)}
          />
        </div>
        <div
          onClick={() => scrollToSection(about)}
          className="tw-rounded-full tw-mb-4 tw-absolute tw-bottom-0"
        >
          <AiOutlineArrowDown
            size={25}
            className="tw-transition-all tw-delay-75 hover:tw-translate-y-1 hover:tw-scale-100 hover:tw-duration-500"
          />
        </div>
      </div>
      {sticky && (
        <Header
          t={t}
          HandleAbout={() => scrollToSection(about)}
          HandleSkills={() => scrollToSection(skills)}
          HandleProyects={() => scrollToSection(proyects)}
        />
      )}
      <About t={t} about={about} mobileHeight={mobileHeight} />
      <Skills t={t} skills={skills} />
      <Proyects t={t} proyects={proyects} />
      <Footer t={t} />
    </div>
  );
};

export default Main;
