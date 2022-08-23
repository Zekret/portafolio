import React from 'react';

const Header = () => {
    return (
        <div
            className='tw-p-4 tw-bg-azul-main tw-w-full tw-fixed tw-z-10 tw-top-0'>
            <div className='tw-text-white tw-font-bold tw-flex tw-gap-4 tw-justify-center'>
                <div className='tw-flex tw-gap-4'>
                    <div>Sobre Mi</div>
                    <div>Habilidades</div>
                    <div>Proyectos</div>
                </div>
            </div>
        </div>
    );
};

export default Header;