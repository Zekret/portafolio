import React from 'react';

const Title = ({ label='' }) => {
    return (
        <div className='tw-text-base tw-font-bold tw-mb-2'>
            {label}
        </div>
    );
};

export default Title;