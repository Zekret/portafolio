import React from 'react';

const P = ({ label='' }) => {
    return (
        <p className='tw-mb-2 tw-text-sm xs:tw-text-base tw-font-rubik'>
            {label}
        </p>
    );
};

export default P;