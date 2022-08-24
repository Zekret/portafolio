import React from 'react';

const TitleMain = ({ label='' }) => {
    return (
        <div className='tw-font-bold tw-text-4xl'>
            {label}
        </div>
    );
};

export default TitleMain;