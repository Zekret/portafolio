import React from "react";
import TitleMain from "./TitleMain";
import tenisup from "../assets/proyects/tenisup.png";
import P from "./FontType/P";
import Title from "./FontType/Title";
import Button from "./button/Button";

const Proyects = ({ proyects, t }) => {
  return (
    <div
      ref={proyects}
      className="tw-h-screen tw-flex tw-justify-center tw-items-center tw-flex-col"
    >
      <div className="tw-mb-16">
        <TitleMain label={t("proyects.title.proyects")} />
      </div>
      <div className="tw-flex tw-flex-col xs:tw-flex-row tw-justify-center tw-items-center tw-w-full">
        <div className="tw-w-full">
          <div className="tw-flex tw-justify-center">
            <img
              className="tw-shadow-2xl xs:tw-shadow-3xl tw-rounded-lg tw-w-[250px] xs:tw-w-[500px] tw-h-[250px] xs:tw-h-[500px]"
              src={tenisup}
              alt="tenisup"
            />
          </div>
        </div>
        <div className="tw-w-full tw-mt-2">
          <div className="tw-px-20">
            <div className="tw-items-center tw-mb-4 xs:tw-mb-8 tw-bg-inherit xs:tw-bg-blue-50 tw-rounded-3xl tw-p-0 xs:tw-p-3">
              <Title label="Tenis-up / Práctica Profesional" />
              <P label={t("proyects.p.description")} />
            </div>
            <Button
              link
              label={t("proyects.p.button")}
              href={"https://www.tenis-up.cl"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyects;
