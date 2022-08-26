import React, { useEffect, useRef, useState } from 'react';
import '../styles/header.css'
import About from '../components/About';
import Header from '../components/Header';
// import Profile from '../components/Profile/Profile';
import Proyects from '../components/Proyects';
import Skills from '../components/Skills';
import { AiOutlineArrowDown, AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'
import { useTranslation } from 'react-i18next';
import Translate from '../components/Translate';
import Footer from '../components/Footer';

const Main = () => {

    const [t, i18n] = useTranslation("global")

    const [sticky, setSticky] = useState(false);
    const [containerOffSet, setContainer] = useState('')
    const [showLng, setShowLng] = useState(false)

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

    const handlerButton = () => {
        if (showLng === false) {
            setShowLng(true)
        }
        if (showLng === true) {
            setShowLng(false)
        }
    }

    return (
        <div>
            <div className='tw-absolute tw-top-8 tw-left-8'>
                <div onClick={() => handlerButton()} className='tw-cursor-pointer tw-flex tw-flex-row tw-bg-transparent hover:tw-bg-blue-500 tw-text-blue-700 tw-font-semibold hover:tw-text-white tw-py-2 tw-px-4 tw-border tw-border-blue-500 hover:tw-border-transparent tw-rounded'>
                    {i18n.translator.language === "es" ? 'Idioma' : 'Language'}
                    <AiOutlineArrowDown className='tw-p-1' size={25} />
                </div>
                {showLng &&
                    <>
                        {i18n.translator.language === "es" && <Translate setShowLng={setShowLng} i18n={i18n} translate={"EN"} />}
                        {i18n.translator.language === "en" && <Translate setShowLng={setShowLng} i18n={i18n} translate={"ES"} />}
                    </>
                }
            </div>
            <div className='tw-absolute tw-top-8 tw-right-8 tw-flex tw-flex-row tw-gap-4'>
                <a target="_blank" rel="noreferrer" className='tw-no-underline tw-cursor-pointer tw-flex tw-flex-row tw-bg-transparent hover:tw-bg-blue-500 tw-text-blue-700 tw-font-semibold hover:tw-text-white tw-py-2 tw-px-4 tw-border tw-border-blue-500 hover:tw-border-transparent tw-rounded' href='https://github.com/Zekret'>
                    GitHub
                    <AiOutlineGithub className='tw-p-1' size={25} /> 
                </a>
                <a target="_blank" rel="noreferrer" className='tw-no-underline tw-cursor-pointer tw-flex tw-flex-row tw-bg-transparent hover:tw-bg-blue-500 tw-text-blue-700 tw-font-semibold hover:tw-text-white tw-py-2 tw-px-4 tw-border tw-border-blue-500 hover:tw-border-transparent tw-rounded' href='https://www.linkedin.com/in/jonatan-benjamin-336982249/'>
                    Linked
                    <AiFillLinkedin className='tw-p-1' size={25} /> 
                </a>
            </div>
            <div>

            </div>
            <div ref={refContainer} className='tw-h-screen tw-flex tw-flex-col tw-justify-center tw-items-center'>
                <div className='tw-flex tw-flex-col tw-text-center'>
                    <h1 className='tw-font-extrabold tw-text-4xl'>Jonatan Concha Camacho</h1>
                    <h2 className='tw-font-semibold tw-text-xl tw-mt-3'>{t("main.job")}</h2>
                </div>
                <div className='tw-flex tw-flex-row tw-mt-5 tw-gap-4 tw-font-medium tw-text-base'>
                    <div onClick={() => scrollToSection(about)} className='tw-cursor-pointer hover:tw-text-azul-main hover:tw-font-bold'>{t("main.about")}</div>
                    <div onClick={() => scrollToSection(skills)} className='tw-cursor-pointer hover:tw-text-azul-main hover:tw-font-bold'>{t("main.skills")}</div>
                    <div onClick={() => scrollToSection(proyects)} className='tw-cursor-pointer hover:tw-text-azul-main hover:tw-font-bold'>{t("main.proyects")}</div>
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
                    t={t}
                    HandleAbout={() => scrollToSection(about)}
                    HandleSkills={() => scrollToSection(skills)}
                    HandleProyects={() => scrollToSection(proyects)}
                />
            }
            <About t={t} about={about} />
            <Skills t={t} skills={skills} />
            <Proyects t={t} proyects={proyects} />
            <Footer t={t} />
        </div>
    );
};

export default Main;