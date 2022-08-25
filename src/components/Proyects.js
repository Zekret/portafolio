import React from 'react';
import TitleMain from './TitleMain';
import tenisup from '../assets/proyects/tenisup.png'
import P from './FontType/P';

const Proyects = ({ proyects }) => {
    return (
        <div ref={proyects} className='tw-h-screen tw-flex tw-justify-center tw-items-center tw-flex-col'>
            <div className='tw-mb-6'>
                <TitleMain label='Proyectos' />
            </div>
            <div className='tw-flex tw-flex-row tw-justify-center tw-items-center tw-w-full'>
                <div className='tw-w-1/2 tw-h-full'>
                    <div className='tw-flex tw-place-content-center tw-p-10'>
                        <img className='tw-shadow-3xl tw-rounded-lg' style={{ width: '500px', height: '500px' }} src={tenisup} alt='tenisup' />
                    </div>
                </div>
                <div className='tw-w-1/2'>
                    <div className='tw-w-3/4 tw-place-content-start'>
                        <P
                            label='Esta aplicacion ideada por Johann Westphal, quien es uno de los fundadores de Westphal Soluciones Tecnologicas Spa, Informática, es una aplicacion
                    que cuenta tanto con sitio web como con aplicacion movil creada principalmente para permitir a jugadores conectarse con otros de su ciudad o pais, asi como tambien
                    poder inscribirse a torneos organizados.'
                        />
                        <button>Ver sitio web</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Proyects;