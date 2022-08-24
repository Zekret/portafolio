import React, { useEffect, useState } from 'react';
import About from '../components/About/About';
import Header from '../components/Header';
import Profile from '../components/Profile/Profile';
import Proyects from '../components/Proyects';
import Skills from '../components/Skills';

const Main = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled === 939 || scrolled > 935) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    })

    const renderContent = () => {

        let allContent = [];

        allContent =
            <div>
                <Profile />
                {sticky && <Header setSticky={setSticky} />}
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