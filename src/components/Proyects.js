import React from 'react';
import TitleMain from './TitleMain';

const Proyects = () => {
    return (
        <div className='tw-h-screen'>
            <div className='tw-h-1/4 tw-flex tw-justify-center tw-items-center'>
                <TitleMain label='Proyectos' />
            </div>
            <div className='tw-h-3/4 tw-flex tw-items-start tw-justify-center tw-gap-40 tw-flex-row'>
                Tenis Up
            </div>
        </div>
    );
};

export default Proyects;