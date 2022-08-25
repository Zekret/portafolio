import React from 'react';
import TitleMain from './TitleMain';

const Skills = ({ skills }) => {
    return (
        <div ref={skills} className='tw-h-screen'>
            <div className='tw-h-1/4 tw-flex tw-justify-center tw-items-center'>
                <TitleMain label='Habilidades' />
            </div>
            <div className='tw-h-3/4 tw-flex tw-items-start tw-justify-center tw-gap-40 tw-flex-row'>
                Fotos xd
            </div>
        </div>
    );
};

export default Skills;