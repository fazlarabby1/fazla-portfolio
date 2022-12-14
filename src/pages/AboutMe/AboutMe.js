import React from 'react';

const AboutMe = () => {
    return (
        <div className='mt-7 text-white xl:w-[1350px] mx-auto'>
            <h1 className='text-center text-3xl text-white mb-3'>About Me</h1>

            <div className="card lg:card-side shadow">
                <div className="card-body">
                    <div className='grid md:grid-cols-2 md:gap-x-7'>
                        <p className='text-xl'>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section. I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                        <div className='mt-5 md:mt-0'>
                            <h1 className='text-2xl mb-5 font-semibold'>My Skills</h1>
                            <div className='flex flex-wrap gap-3'>
                                <button className='border px-3 py-2 rounded hover:w-32 hover:bg-amber-500 hover:font-bold' disabled>HTML</button>
                                <button className='border px-3 py-2 rounded hover:w-32 hover:bg-amber-500 hover:font-bold' disabled>CSS</button>
                                <button className='border px-3 py-2 rounded hover:w-32 hover:bg-amber-500 hover:font-bold' disabled>JavaScript</button>
                                <button className='border px-3 py-2 rounded hover:w-32 hover:bg-amber-500 hover:font-bold' disabled>Bootstrap</button>
                                <button className='border px-3 py-2 rounded hover:w-32 hover:bg-amber-500 hover:font-bold' disabled>Tailwind</button>
                                <button className='border px-3 py-2 rounded hover:w-32 hover:bg-amber-500 hover:font-bold' disabled>React</button>
                                <button className='border px-3 py-2 rounded hover:w-32 hover:bg-amber-500 hover:font-bold' disabled>React Router</button>
                                <button className='border px-3 py-2 rounded hover:w-32 hover:bg-amber-500 hover:font-bold' disabled>Node JS</button>
                                <button className='border px-3 py-2 rounded hover:w-32 hover:bg-amber-500 hover:font-bold' disabled>Express JS</button>
                                <button className='border px-3 py-2 rounded hover:w-32 hover:bg-amber-500 hover:font-bold' disabled>Firebase</button>
                                <button className='border px-3 py-2 rounded hover:w-32 hover:bg-amber-500 hover:font-bold' disabled>MongoDB</button>
                                <button className='border px-3 py-2 rounded hover:w-32 hover:bg-amber-500 hover:font-bold' disabled>GitHub</button>
                                <button className='border px-3 py-2 rounded hover:w-32 hover:bg-amber-500 hover:font-bold' disabled>Netlify</button>
                                <button className='border px-3 py-2 rounded hover:w-32 hover:bg-amber-500 hover:font-bold' disabled>Figma</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;