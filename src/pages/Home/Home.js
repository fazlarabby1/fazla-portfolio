import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import ContactMe from '../ContactMe/ContactMe';
import Projects from '../Projects/Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutMe />
            <Projects />
            <ContactMe />
        </div>
    );
};

export default Home;