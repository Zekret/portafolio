import React from 'react';

const P = ({ label='' }) => {
    return (
        <p className='tw-mb-2 tw-text-sm xs:tw-text-base'>
            {label}
        </p>
    );
};

export default P;