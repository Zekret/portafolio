
import IMG from '../../assets/gato.jpg'
import TitleMain from '../TitleMain';
import P from '../FontType/P';
import Title from '../FontType/Title';

const About = ({ about }) => {

    return (
        <div ref={about} className='tw-h-screen tw-flex tw-justify-center tw-items-center tw-flex-col'>
            <div className='tw-mb-6'>
                <TitleMain label='Sobre Mi' />
            </div>
            <div className='tw-flex tw-items-start tw-justify-center tw-gap-40 tw-flex-row'>
                <div className='tw-mt-16'>
                    <img className='tw-rounded-full tw-h-64 tw-w-64' src={IMG} alt='Gato' />
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
                            label='Estudie Ingenieria Informatica en la universidad tecnologica de INACAP'
                        />
                    </div>
                    <div>
                        <Title label='Experiencia' />
                        <P
                            label='He adquirido conocimientos en diferentes tecnologias tales como HTML, CSS, JavaScript, React, Redux y NodeJS.'
                        />
                        <P
                            label='En la etapa que estuve desarrollando en un proyecto durante casi 1 año.'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;