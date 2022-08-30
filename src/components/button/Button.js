import React from 'react';

const Button = ({ onClick = {}, label, link, href={}, buttonClass, className }) => {
    return (
        <>
            {link ?
                <a target="_blank" rel="noreferrer" className='tw-no-underline tw-cursor-pointer tw-bg-transparent hover:tw-bg-blue-500 tw-text-blue-700 tw-font-semibold hover:tw-text-white tw-py-2 tw-px-3 xs:tw-px-8 tw-border tw-border-blue-500 hover:tw-border-transparent tw-rounded-3xl tw-font-monserrat' href={href}>
                    {label}
                </a>
                :
                <button
                    className={buttonClass ? 'tw-font-elegance tw-cursor-pointer tw-flex tw-flex-row tw-bg-transparent hover:tw-bg-blue-500 tw-text-blue-700 tw-font-semibold hover:tw-text-white tw-py-2 tw-px-3 xs:tw-px-8 tw-border tw-border-blue-500 hover:tw-border-transparent tw-rounded-3xl tw-font-monserrat' : className}
                    onClick={onClick}
                >
                    {label}
                </button>}
        </>

    );
};

export default Button;