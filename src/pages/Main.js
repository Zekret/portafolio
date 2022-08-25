import React, { useEffect, useRef, useState } from 'react';
import About from '../components/About';
import Header from '../components/Header';
// import Profile from '../components/Profile/Profile';
import Proyects from '../components/Proyects';
import Skills from '../components/Skills';
import { AiOutlineArrowDown } from 'react-icons/ai'

const Main = () => {

    const [sticky, setSticky] = useState(false);
    const [containerOffSet, setContainer] = useState('')

    const about = useRef(null)
    const skills = useRef()
    const proyects = useRef(null)
    const refContainer = useRef(null)

    const scrollToSection = (element) => {
        window.scrollTo({
            top: element.current.offsetTop,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        const div = refContainer.current.offsetHeight
        setContainer(div)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (
                (scrolled === containerOffSet || scrolled > containerOffSet)
            ) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    })

    return (
        <div>
            <div ref={refContainer} className='tw-h-screen tw-flex tw-flex-col tw-justify-center tw-items-center'>
                <div className='tw-flex tw-flex-col tw-text-center'>
                    <h1 className='tw-font-extrabold tw-text-4xl'>Jonatan Concha</h1>
                    <h2 className='tw-font-semibold tw-text-xl tw-mt-3'>Desarrollador Web</h2>
                </div>
                <div className='tw-flex tw-flex-row tw-mt-5 tw-gap-4 tw-font-medium tw-text-base'>
                    <div onClick={() => scrollToSection(about)} className='tw-cursor-pointer tw-transition-all tw-duration-500 tw-ease-in-out hover:tw-text-azul-main hover:tw-font-bold hover:tw-scale-100'>Sobre Mi</div>
                    <div onClick={() => scrollToSection(skills)} className='tw-cursor-pointer tw-transition-all tw-duration-500 tw-ease-in-out hover:tw-text-azul-main hover:tw-font-bold hover:tw-scale-100'>Habilidades</div>
                    <div onClick={() => scrollToSection(proyects)} className='tw-cursor-pointer tw-transition-all tw-duration-500 tw-ease-in-out hover:tw-text-azul-main hover:tw-font-bold hover:tw-scale-100'>Proyectos</div>
                </div>
                <div
                    onClick={() => scrollToSection(about)}
                    className='tw-rounded-full tw-mb-4 tw-absolute tw-bottom-0'
                >
                    <AiOutlineArrowDown size={25} className='tw-transition-all tw-delay-75 hover:tw-translate-y-1 hover:tw-scale-100 hover:tw-duration-500' />
                </div>
            </div>
            {sticky
                &&
                <Header
                    HandleAbout={() => scrollToSection(about)}
                    HandleSkills={() => scrollToSection(skills)}
                    HandleProyects={() => scrollToSection(proyects)}
                />
            }
            <About about={about} />
            <Skills skills={skills} />
            <Proyects proyects={proyects} />
        </div>
    );
};

export default Main;