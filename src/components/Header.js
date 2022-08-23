import React from 'react';
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <div className='tw-m-4'>
            <NavLink to='/'>Inicio</NavLink>
            <NavLink to='/github'>GitHub</NavLink>
        </div>
    );
};

export default Header;