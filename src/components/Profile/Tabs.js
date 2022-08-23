import React from 'react';

const Tabs = ({ label, value, className='', icon, iconDiv }) => {

    const handleScroll = () => {
        window.scrollTo({ top: value, behavior: 'smooth' })
    }

    return (
        <div className={className} onClick={() => handleScroll()}>
            {icon ? iconDiv : label}
        </div>
    );
};

export default Tabs;