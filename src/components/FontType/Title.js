import React from 'react';

const Title = ({ label='' }) => {
    return (
        <div className='tw-text-lg xs:tw-text-xl tw-font-bold tw-mb-2 tw-font-nunito'>
            {label}
        </div>
    );
};

export default Title;