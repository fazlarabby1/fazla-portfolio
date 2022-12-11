import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../../shared/Loading';

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
        <div className='mt-10 mb-16'>
            <h1 className='text-3xl text-white text-center font-semibold my-5'>My Works</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 xl:w-[1350px] mx-auto'>
                {
                    projects.map(project => <div key={project?._id} className="card h-[500px] shadow-xl text-white bg-sky-700 hover:bg-indigo-800">
                        <figure>
                            <img src={project?.image} alt="Shoes" className="h-[240px] pt-4" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-center">{project?.projectTitle}</h2>
                            {
                                project?.description.map((data, i) =>
                                    <ol key={i} style={{ listStyleType: 'square' }}>
                                        <li>{data}</li>
                                    </ol>
                                )
                            }

                            <div className="card-actions">
                                <Link to={`/projectDetails/${project._id}`} className="btn btn-primary">Project Details</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Projects;