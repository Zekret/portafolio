import React from 'react';
import '../styles/header.css'
const Header = ({ HandleAbout, HandleSkills, HandleProyects, t }) => {
    return (
        // <div
        //     className='tw-p-4 tw-w-full tw-sticky tw-z-10 tw-top-0'>
        //     <div className='tw-text-black tw-font-bold tw-flex tw-gap-4 tw-justify-center'>
        //         <div className='container-button'>
        //             <div onClick={HandleAbout} className='tw-cursor-pointer tw-flex tw-flex-row tw-bg-transparent hover:tw-bg-blue-500 tw-text-blue-700 tw-font-semibold hover:tw-text-white tw-py-2 tw-px-6 tw-border tw-border-blue-500 hover:tw-border-transparent tw-rounded'>{t("header.about")}</div>
        //         </div>
        //         <div className='container-button'>
        //             <div onClick={HandleSkills} className='tw-cursor-pointer tw-flex tw-flex-row tw-bg-transparent hover:tw-bg-blue-500 tw-text-blue-700 tw-font-semibold hover:tw-text-white tw-py-2 tw-px-6 tw-border tw-border-blue-500 hover:tw-border-transparent tw-rounded'>{t("header.skills")}</div>
        //         </div>
        //         <div className='container-button'>
        //             <div onClick={HandleProyects} className='tw-cursor-pointer tw-flex tw-flex-row tw-bg-transparent hover:tw-bg-blue-500 tw-text-blue-700 tw-font-semibold hover:tw-text-white tw-py-2 tw-px-6 tw-border tw-border-blue-500 hover:tw-border-transparent tw-rounded'>{t("header.proyects")}</div>
        //         </div>
        //     </div>
        // </div>
        <div
            className='tw-p-4 tw-bg-azul-main tw-w-full tw-sticky tw-z-10 tw-top-0'>
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