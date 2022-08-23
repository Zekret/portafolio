import React from 'react';
import IMG from '../../assets/gato.jpg'
import TitleMain from '../TitleMain';
import P from './P';
import Title from './Title';

const About = () => {
    return (
        <div className='tw-h-screen tw-flex tw-justify-evenly tw-items-center tw-flex-col'>
            <div>
                    <TitleMain label='Sobre Mi' />
            </div>
            <div className='tw-flex tw-flex-row tw-gap-36'>
                <div>
                    <img className='tw-rounded-full tw-h-64 tw-w-64' src={IMG} alt='Gato' />
                </div>
                <div className='tw-flex tw-flex-col'>
                    <div className='tw-w-80'>
                        <Title label='Perfil' />
                        <P
                            label='Soy una persona que le gusta jugar mucho al fifita y al lol a veces de hecho esto es de relleno para completar un parrafo.'
                        />
                    </div>
                    <div>
                        <Title label='Educación' />
                        <P
                            label='Estudie en la universidad tecnologica INACAP'
                        />
                    </div>
                    <div>
                        <Title label='Experiencia' />
                        <p>
                            lorem dsffffffff
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;