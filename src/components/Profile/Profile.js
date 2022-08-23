import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai'
import Tabs from './Tabs';

const Profile = () => {

    return (
        <div className='tw-h-screen tw-flex tw-flex-col tw-justify-center tw-items-center'>
            <div className='tw-flex tw-flex-col tw-text-center'>
                <h1>Jonatan Concha</h1>
                <h2>Desarrollador Web</h2>
            </div>
            <div className='tw-flex tw-flex-row tw-mt-4 tw-gap-4'>
                <Tabs label={'Sobre Mi'} value={939} />
                <Tabs label={'Habilidades'} value={1878} />
                <Tabs label={'Proyectos'} value={2817} />
            </div>
            <Tabs
                className='tw-rounded-full tw-mb-4 tw-absolute tw-bottom-0'
                value={939} 
                icon={true} 
                iconDiv={<AiOutlineArrowDown size={25} className='tw-transition-all tw-delay-75 hover:tw-translate-y-1 hover:tw-scale-100 hover:tw-duration-500' />}>
            </Tabs>
        </div>
    );
};

export default Profile;