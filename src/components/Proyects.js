import React from 'react';
import TitleMain from './TitleMain';
import tenisup from '../assets/proyects/tenisup.png'
import P from './FontType/P';

const Proyects = ({ proyects, t }) => {
    return (
        <div ref={proyects} className='tw-h-screen tw-flex tw-justify-center tw-items-center tw-flex-col'>
            <div className='tw-mb-6'>
                <TitleMain label={t("proyects.title.proyects")} />
            </div>
            <div className='tw-flex tw-flex-row tw-justify-center tw-items-center tw-w-full'>
                <div className='tw-w-1/2 tw-h-full'>
                    <div className='tw-flex tw-place-content-center tw-p-10'>
                        <img className='tw-shadow-3xl tw-rounded-lg' style={{ width: '500px', height: '500px' }} src={tenisup} alt='tenisup' />
                    </div>
                </div>
                <div className='tw-w-1/2'>
                    <div className='tw-w-3/4 tw-place-content-start tw-mb-4'>
                        <P
                            label={t("proyects.p.description")}
                        />
                    </div>
                    <button className='tw-rounded-3xl tw-bg-azul-main tw-text-white tw-font-bold tw-pt-3 tw-pb-3 tw-pl-4 tw-pr-4'>Ver sitio web</button>
                </div>
            </div>
        </div>
    );
};

export default Proyects;