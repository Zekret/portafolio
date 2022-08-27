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
                    <div className='tw-px-20'>
                        <div className='tw-items-center tw-mb-8'>
                            <P
                                label={t("proyects.p.description")}
                            />
                        </div>
                        <a target="_blank" rel="noreferrer" className='tw-no-underline tw-cursor-pointer tw-bg-transparent hover:tw-bg-blue-500 tw-text-blue-700 tw-font-semibold hover:tw-text-white tw-py-2 tw-px-4 tw-border tw-border-blue-500 hover:tw-border-transparent tw-rounded' href='https://www.tenis-up.cl'>
                            {t("proyects.p.button")}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Proyects;