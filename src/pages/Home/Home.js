import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import ProjectsDetails from '../Projects/ProjectsDetails/ProjectsDetails';

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutMe />
            <ProjectsDetails />
        </div>
    );
};

export default Home;