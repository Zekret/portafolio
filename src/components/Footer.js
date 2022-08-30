import React from 'react';

const Footer = ({ t }) => {
    return (
        <div className='tw-flex tw-justify-center tw-font-bold tw-bg-blue-700 tw-text-white tw-p-8 tw-font-monserrat'>
            ©{new Date().getFullYear()}. {t("footer.text.made")}.
        </div>
    );
};

export default Footer;