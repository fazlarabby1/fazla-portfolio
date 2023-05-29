import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects/Projects';
import SendEmail from '../SendEmail/SendEmail';

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutMe />
            <Projects />
            <SendEmail />
        </div>
    );
};

export default Home;