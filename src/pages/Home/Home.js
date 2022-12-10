import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import ContactMe from '../ContactMe/ContactMe';
import ProjectsDetails from '../Projects/ProjectsDetails/ProjectsDetails';

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutMe />
            <ProjectsDetails />
            <ContactMe />
        </div>
    );
};

export default Home;