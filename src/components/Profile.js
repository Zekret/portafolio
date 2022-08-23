import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai'

const Profile = () => {
    return (
        <div className='tw-h-screen tw-flex tw-flex-col tw-justify-center tw-items-center'>
            <div className='tw-flex tw-flex-col tw-text-center'>
                <h1>Jonatan Concha</h1>
                <h2>Desarrollador Web</h2>
            </div>
            <div className='tw-flex tw-flex-row tw-mt-4 tw-gap-4'>
                <h2>
                    Sobre Mi
                </h2>
                <h2>
                    Habilidades
                </h2>
                <h2>
                    Proyectos
                </h2>
            </div>
            <div className='tw-rounded-full tw-mb-4 tw-absolute tw-bottom-0'>
                <AiOutlineArrowDown size={25} className='tw-transition-all tw-delay-75 hover:tw-translate-y-1 hover:tw-scale-100 hover:tw-duration-500'  />
            </div>
        </div>
    );
};

export default Profile;