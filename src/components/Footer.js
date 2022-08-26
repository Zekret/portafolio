import React from 'react';

const Footer = ({ t }) => {
    return (
        <div className='tw-flex tw-justify-center tw-font-bold tw-bg-azul-main tw-text-white tw-p-8'>
            ©{new Date().getFullYear()}. {t("footer.text.made")}.
        </div>
    );
};

export default Footer;