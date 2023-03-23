import { Proyect } from "./proyects/Proyect";
import tenisup from "../assets/proyects/tenisup.png";
import pconnected from "../assets/proyects/pc-connected.png";
import axiom from "../assets/proyects/axiom.png";
import pokedex from "../assets/proyects/pokedex.png"
import tictactoe from "../assets/proyects/tic-tac-toe.png";
import rockpaperscissors from "../assets/proyects/rock-paper-scissors.png"


const Proyects = ({ proyects, t }) => {
  return (
    <>
      <Proyect
        proyects={proyects}
        t={t}
        isFirstProyect
        haveLink
        title={t("proyects.title")}
        image={tenisup}
        proyectTitle={t("proyects.proyect-01.title")}
        description={t("proyects.proyect-01.description")}
        labelButton={t("proyects.buttonSeeWeb")}
        href={"https://www.tenis-up.cl"}
      />
      <Proyect
        t={t}
        image={pconnected}
        proyectTitle={t("proyects.proyect-02.title")}
        description={t("proyects.proyect-02.description")}
        labelButton={t("proyects.buttonPrivateCode")}
      />
      <Proyect
        t={t}
        image={axiom}
        proyectTitle={t("proyects.proyect-03.title")}
        description={t("proyects.proyect-03.description")}
        labelButton={t("proyects.buttonPrivateCode")}
      />
      <Proyect
        t={t}
        image={pokedex}
        proyectTitle={t("proyects.proyect-04.title")}
        description={t("proyects.proyect-04.description")}
        labelButton={t("proyects.buttonSeeCode")}
        haveLink
        href={"https://github.com/Zekret/pokedex"}
      />
    </>
  );
};

export default Proyects;
