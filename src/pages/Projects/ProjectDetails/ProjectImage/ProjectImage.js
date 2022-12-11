import React from 'react';

const ProjectImage = ({ pictures }) => {
    return (
        <div className='xl:w-[900px] mx-auto'>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-3'>
                {pictures.map((picture, index) => (
                    <img
                        className="h-[250px]"
                        src={picture}
                        alt=""
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectImage;