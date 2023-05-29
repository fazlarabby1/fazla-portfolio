import React from 'react';
import Slide from 'react-reveal/Slide';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ProjectImage = ({ pictures }) => {

    return (
        <Slide left>
            < div className='xl:w-[900px] mx-auto' >
                <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-3'>
                    <PhotoProvider>
                        {pictures.map((picture, index) => (
                            <PhotoView key={index} src={picture}>
                                <img
                                    className="h-[250px]"
                                    src={picture}
                                    alt=""
                                />
                            </PhotoView>
                        ))}
                    </PhotoProvider>
                </div>
            </div >
        </Slide>
    );
};

export default ProjectImage;