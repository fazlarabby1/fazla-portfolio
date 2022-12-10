import React, { useEffect, useState } from 'react';

const ProjectsDetails = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);
    return (
        <div className='mt-10 mb-16'>
            <h1 className='text-3xl text-white text-center font-semibold my-5'>My Works</h1>
            
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 xl:w-[1350px] mx-auto'>
                    {
                        projects.map(project => <div className="card h-[440px] shadow-xl text-white bg-sky-700 hover:bg-indigo-800 hover:h-[455px]">
                            <figure className="pt-4">
                                <img src={project?.image} alt="Shoes" className="rounded-xl h-[250px]" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{project?.projectTitle}</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Project Details</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
        </div>
    );
};

export default ProjectsDetails;