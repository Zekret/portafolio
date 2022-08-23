import React from 'react';
import Tabs from './Profile/Tabs';

const Header = () => {
    return (
        <div
            className='tw-p-4 tw-bg-azul-main tw-w-full tw-fixed tw-z-10 tw-top-0'>
            <div className='tw-text-white tw-font-bold tw-flex tw-gap-4 tw-justify-center'>
                <div className='tw-flex tw-gap-4'>
                    <Tabs label={'Sobre Mi'} value={939} />
                    <Tabs label={'Habilidades'} value={1878} />
                    <Tabs label={'Proyectos'} value={2817} />
                </div>
            </div>
        </div>
    );
};

export default Header;