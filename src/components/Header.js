import React from 'react';
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <div className='tw-p-4 tw-bg-azul-main tw-w-full'>
            <div className='tw-text-white tw-font-bold tw-flex tw-gap-4 tw-justify-center'>
                <div className='tw-flex tw-gap-4'>
                    <NavLink to='/'>Sobre Mi</NavLink>
                    <NavLink to='/'>Habilidades</NavLink>
                    <NavLink to='/'>Proyectos</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;