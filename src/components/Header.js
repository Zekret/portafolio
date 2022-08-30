import React from 'react';
import '../styles/header.css'
const Header = ({ HandleAbout, HandleSkills, HandleProyects, t }) => {
    return (
        <div
            className='tw-p-4 tw-bg-blue-700 tw-w-full tw-sticky tw-z-10 tw-top-0'>
            <div className='tw-text-white tw-font-bold tw-flex tw-gap-4 tw-justify-center'>
                <div className='tw-flex tw-gap-4'>
                    <div className='container-button'>
                        <button onClick={HandleAbout} className='button-header tw-cursor-pointer tw-font-monserrat'>{t("header.about")}</button>
                    </div>
                    <div className='container-button'>
                        <button onClick={HandleSkills} className='button-header tw-cursor-pointer tw-font-monserrat'>{t("header.skills")}</button>
                    </div>
                    <div className='container-button'>
                        <button onClick={HandleProyects} className='button-header tw-cursor-pointer tw-font-monserrat'>{t("header.proyects")}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;