import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../../shared/Loading';
import Fade from 'react-reveal/Fade';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://fazla-portfolio-server.vercel.app/projects')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setIsLoading(false);
            })
    }, []);

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='my-16 mx-5 md:mx-10'>
            <h1 className='text-3xl text-white text-center font-semibold mb-10'>My Works</h1>

            <Fade top >
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {
                        projects.map(project =>

                            <div key={project?._id} className="card rounded-tl-[90px] rounded-br-[90px] text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:z-50
                            bg-[#16162F] hover:bg-gradient-to-b hover:from-[#17023e] hover:to-[#100f69] duration-300">
                                <figure>
                                    <img src={project?.image} alt={project?.projectTitle} className="h-44 pt-4" />
                                </figure>
                                <div className="card-body px-8 pb-20">
                                    <h2 className="card-title text-center"><span className='text-2xl font-bold text-yellow-300'>Title:</span> {project?.projectTitle}</h2>
                                    {
                                        project?.description.map((data, i) =>
                                            <ol key={i} style={{ listStyleType: 'disc' }}>
                                                <li className='text-sm'>{data}</li>
                                            </ol>
                                        )
                                    }

                                    <div className="absolute bottom-4">
                                        <Link to={`/projectDetails/${project._id}`} className="btn btn-info text-white ">Project Details</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </Fade>
        </div>
    );
};

export default Projects;