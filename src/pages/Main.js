import React from 'react';
import About from '../components/About';
import Header from '../components/Header';

const Main = () => {

    const renderContent = () => {

        let allContent = [];

        allContent = 
        <div>
            <About />
        </div>
        return allContent

    }
    return (
        <div>
            <Header />
            <div>{renderContent()}</div>
        </div>
    );
};

export default Main;