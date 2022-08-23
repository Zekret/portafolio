import React, { useEffect, useState } from 'react';
import About from '../components/About';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Proyects from '../components/Proyects';
import Skills from '../components/Skills';

const Main = () => {

    const [sticky, setSticky] = useState(false);
    const [scrollValue, setScrollValue] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled === 939 || scrolled > 939) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    })

    const handleScroll = () => {
        window.scrollTo({ top: scrollValue, behavior: 'smooth' })
    }

    const renderContent = () => {

        let allContent = [];

        allContent =
            <div>
                <Profile handleScroll={() => handleScroll()} setScrollValue={setScrollValue} />
                {sticky && <Header scrollValue={scrollValue} setSticky={setSticky} />}
                <About />
                <Skills />
                <Proyects />
            </div>
        return allContent

    }
    return (
        <div>
            <div>{renderContent()}</div>
        </div>
    );
};

export default Main;