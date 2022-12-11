import { useLoaderData } from 'react-router-dom';
import ProjectImage from './ProjectImage/ProjectImage';

const ProjectDetails = () => {
    const singleProject = useLoaderData();
    const { projectTitle, liveLink, clientCodeLink, serverCodeLink, pictures, detailedDescription } = singleProject;
    return (
        <div className='mt-7'>
            <h1 className='text-center text-white text-3xl'>Welcome To <span className='text-4xl text-pink-600 font-semibold'>{projectTitle}</span></h1>
            <div className='mt-7 flex flex-wrap justify-center gap-4'>
                <a className='btn btn-outline btn-warning' href={liveLink} rel="noreferrer" target='_blank'>Live Site</a>
                <a className='btn btn-outline btn-warning' href={clientCodeLink} rel="noreferrer" target='_blank'>Client Site Code</a>
                <a className='btn btn-outline btn-warning' href={serverCodeLink} rel="noreferrer" target='_blank'>Server Site Code</a>
            </div>
            <h1 className='text-center my-7 text-2xl font-semibold text-white'>Image Preview of <span className='text-warning'>{projectTitle}</span></h1>
            <ProjectImage pictures={pictures} />
            <div className='lg:w-3/5 w-4/5 mx-auto my-10 shadow-lg'>
                {
                    detailedDescription.map((description, i) =>
                        <ol key={i} style={{ listStyleType: 'square' }}>
                            <li className='text-pink-700 font-semibold text-xl'>{description}</li>
                        </ol>
                    )
                }
            </div>
        </div>
    );
};

export default ProjectDetails;