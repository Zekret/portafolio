import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai'
import Tabs from './Tabs';

const Profile = () => {

    return (
        <div className='tw-h-screen tw-flex tw-flex-col tw-justify-center tw-items-center'>
            <div className='tw-flex tw-flex-col tw-text-center'>
                <h1 className='tw-font-extrabold tw-text-4xl'>Jonatan Concha</h1>
                <h2 className='tw-font-semibold tw-text-xl tw-mt-3'>Desarrollador Web</h2>
            </div>
            <div className='tw-flex tw-flex-row tw-mt-5 tw-gap-4 tw-font-medium tw-text-base'>
                <Tabs className='tw-cursor-pointer tw-transition-all tw-duration-200 tw-ease-in-out hover:tw-text-azul-main hover:tw-font-bold hover:tw-scale-95' label={'Sobre Mi'} value={939} />
                <Tabs className='tw-cursor-pointer tw-transition-all tw-duration-200 tw-ease-in-out hover:tw-text-azul-main hover:tw-font-bold hover:tw-scale-95' label={'Habilidades'} value={1878} />
                <Tabs className='tw-cursor-pointer tw-transition-all tw-duration-200 tw-ease-in-out hover:tw-text-azul-main hover:tw-font-bold hover:tw-scale-95' label={'Proyectos'} value={2817} />
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