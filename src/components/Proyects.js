import React from 'react';
import TitleMain from './TitleMain';
import tenisup from '../assets/proyects/tenisup.png'
import tenisup2 from '../assets/proyects/tenisup2.png'
import tenisup3 from '../assets/proyects/tenisup3.png'
import P from './FontType/P';
import Title from './FontType/Title';

//Swiper 
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";

const Proyects = ({ proyects, t }) => {
    return (
        <div ref={proyects} className='tw-h-screen tw-flex tw-justify-center tw-items-center tw-flex-col'>
            <div className='tw-mb-16'>
                <TitleMain label={t("proyects.title.proyects")} />
            </div>
            <div className='tw-flex tw-flex-row tw-justify-center tw-items-center tw-w-full'>
                <div className='tw-w-1/2'>
                    <Swiper
                        effect={"flip"}
                        grabCursor={true}
                        pagination={true}
                        navigation={true}
                        modules={[EffectFlip, Pagination, Navigation]}
                        className="tw-flex tw-justify-center tw-items-center"
                    >
                        <SwiperSlide className='tw-flex tw-justify-center'>
                            <img className='tw-shadow-3xl tw-rounded-lg tw-w-[400px] tw-h-[400px]' src={tenisup} alt='tenisup' />
                        </SwiperSlide>
                        <SwiperSlide className='tw-flex tw-justify-center'>
                            <img className='tw-shadow-3xl tw-rounded-lg tw-w-[400px] tw-h-[400px]' src={tenisup2} alt='tenisup' />
                        </SwiperSlide>
                        <SwiperSlide className='tw-flex tw-justify-center'>
                            <img className='tw-shadow-3xl tw-rounded-lg tw-w-[400px] tw-h-[400px]' src={tenisup3} alt='tenisup' />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='tw-w-1/2'>
                    <div className='tw-px-20'>
                        <div className='tw-items-center tw-mb-8'>
                            <Title label='Tenis-up' />
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