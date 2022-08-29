import React from 'react';
import es from '../assets/translate/es.png'
import en from '../assets/translate/en.png'

const Translate = ({ mobile, translate = {}, i18n, setShowLng }) => {
    return (
        <div onClick={() => { i18n.changeLanguage(translate === 'ES' ? 'es' : 'en'); setShowLng(false) }} className='tw-mt-4 tw-gap-4 tw-cursor-pointer tw-flex tw-flex-row tw-justify-center tw-bg-transparent hover:tw-bg-blue-500 tw-text-blue-700 tw-font-semibold hover:tw-text-white tw-py-2 tw-px-4 xs:tw-px-8 tw-border tw-border-blue-500 hover:tw-border-transparent tw-rounded-3xl'>
            {!mobile &&
                <div>
                    {translate}
                </div>}
            <div>
                <img className='tw-w-6 tw-h-6 tw-rounded-full' src={translate === 'ES' ? es : en} alt='es' />
            </div>
        </div>
    );
};

export default Translate;