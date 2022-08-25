import React from 'react';
import '../styles/header.css'
const Header = ({ HandleAbout, HandleSkills, HandleProyects }) => {
    return (
        // <div
        //     className='tw-p-4 tw-w-full tw-sticky tw-z-10 tw-top-0'>
        //     <div className='tw-text-black tw-font-bold tw-flex tw-gap-4 tw-justify-center'>
        //         <Tabs className='tw-rounded-full tw-bg-white tw-border tw-border-black tw-pr-4 tw-pl-4 tw-pt-2 tw-pb-2' label={'Sobre Mi'} value={939} />
        //         <Tabs className='tw-rounded-full tw-bg-white tw-border tw-border-black tw-pr-4 tw-pl-4 tw-pt-2 tw-pb-2' label={'Habilidades'} value={1878} />
        //         <Tabs className='tw-rounded-full tw-bg-white tw-border tw-border-black tw-pr-4 tw-pl-4 tw-pt-2 tw-pb-2' label={'Proyectos'} value={2817} />
        //     </div>
        // </div>
        <div
            className='tw-p-4 tw-bg-azul-main tw-w-full tw-sticky tw-z-10 tw-top-0'>
            <div className='tw-text-white tw-font-bold tw-flex tw-gap-4 tw-justify-center'>
                <div className='tw-flex tw-gap-4'>
                    <div className='container-button'>
                        <div onClick={HandleAbout} className='button-header tw-cursor-pointer'>Sobre Mi</div>
                    </div>
                    <div className='container-button'>
                        <div onClick={HandleSkills} className='button-header tw-cursor-pointer'>Habilidades</div>
                    </div>
                    <div className='container-button'>
                        <div onClick={HandleProyects} className='button-header tw-cursor-pointer'>Proyectos</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;