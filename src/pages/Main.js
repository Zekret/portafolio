import React, { useState } from 'react';
import About from '../components/About';
import Header from '../components/Header';
import Profile from '../components/Profile';

const Main = () => {

    const [sticky, setSticky] = useState(false)

    const renderContent = () => {

        let allContent = [];

        allContent =
            <div>
                <Profile />
                {sticky && <Header />}
                <About />
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