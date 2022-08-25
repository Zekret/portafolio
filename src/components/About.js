
import IMG from '../../src/assets/gato.jpg'
import TitleMain from './TitleMain';
import P from './FontType/P';
import Title from './FontType/Title';

const About = ({ about }) => {

    return (
        <div ref={about} className='tw-h-screen tw-flex tw-justify-center tw-items-center tw-flex-col'>
            <div className='tw-mb-6'>
                <TitleMain label='Sobre Mi' />
            </div>
            <div className='tw-flex tw-items-start tw-justify-center tw-gap-40 tw-flex-row'>
                <div className='tw-mt-16'>
                    <img className='tw-rounded-full tw-h-64 tw-w-64 tw-shadow-3xl' src={IMG} alt='Gato' />
                </div>
                <div className='tw-flex tw-flex-col tw-justify-center tw-gap-4 tw-w-96'>
                    <div>
                        <Title label='Perfil' />
                        <P
                            label='Soy una persona que le gusta jugar mucho al fifita y al lol a veces de hecho esto es de relleno para completar un parrafo.'
                        />
                    </div>
                    <div>
                        <Title label='Educación' />
                        <P
                            label='Ingenieria en Informática'
                        />
                        <P
                            label='Universidad Tecnológica de Chile, INACAP'
                        />
                        <P
                            label='2016 - 2020'
                        />
                    </div>
                    <div>
                        <Title label='Experiencia' />
                        <P
                            label='Tenis-Up'
                        />
                        <P
                            label='Febrero 2021 - Mayo 2021'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;