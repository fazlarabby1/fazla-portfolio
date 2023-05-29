import React from 'react';
import { Fade } from 'react-reveal';

const AboutMe = () => {
    return (
        <div className='mt-14 text-white'>
            <h1 className='text-center text-3xl text-white mb-3'>About Me</h1>

            <div className='mx-4 md:mx-10 lg:mx-28 py-10'>
                <div className="flex items-center gap-12 flex-col lg:flex-row">

                    <Fade left>
                        <div className='lg:w-[100vw]'>
                            <p className='text-justify'>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section. I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                        </div>
                    </Fade>

                    <Fade bottom big>
                        <div className='mt-5 md:mt-0'>
                            <h1 className='text-2xl mb-5 font-semibold'>My Skillsets</h1>
                            <div className='flex flex-wrap gap-3 w-full'>

                                <p className='border px-3 py-2 rounded transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:bg-gradient-to-r from-[#17023e] to-[#100f69] duration-300'
                                    disabled>HTML</p>
                                <p className='border px-3 py-2 rounded transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:bg-gradient-to-r from-[#17023e] to-[#100f69] duration-300' disabled>CSS</p>
                                <p className='border px-3 py-2 rounded transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:bg-gradient-to-r from-[#17023e] to-[#100f69] duration-300' disabled>JavaScript</p>
                                <p className='border px-3 py-2 rounded transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:bg-gradient-to-r from-[#17023e] to-[#100f69] duration-300' disabled>Bootstrap</p>
                                <p className='border px-3 py-2 rounded transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:bg-gradient-to-r from-[#17023e] to-[#100f69] duration-300' disabled>Tailwind</p>
                                <p className='border px-3 py-2 rounded transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:bg-gradient-to-r from-[#17023e] to-[#100f69] duration-300' disabled>React</p>
                                <p className='border px-3 py-2 rounded transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:bg-gradient-to-r from-[#17023e] to-[#100f69] duration-300' disabled>React Router</p>
                                <p className='border px-3 py-2 rounded transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:bg-gradient-to-r from-[#17023e] to-[#100f69] duration-300' disabled>Node JS</p>
                                <p className='border px-3 py-2 rounded transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:bg-gradient-to-r from-[#17023e] to-[#100f69] duration-300' disabled>Express JS</p>
                                <p className='border px-3 py-2 rounded transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:bg-gradient-to-r from-[#17023e] to-[#100f69] duration-300' disabled>Firebase</p>
                                <p className='border px-3 py-2 rounded transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:bg-gradient-to-r from-[#17023e] to-[#100f69] duration-300' disabled>MongoDB</p>
                                <p className='border px-3 py-2 rounded transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:bg-gradient-to-r from-[#17023e] to-[#100f69] duration-300' disabled>GitHub</p>
                                <p className='border px-3 py-2 rounded transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:bg-gradient-to-r from-[#17023e] to-[#100f69] duration-300' disabled>Netlify</p>
                                <p className='border px-3 py-2 rounded transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:bg-gradient-to-r from-[#17023e] to-[#100f69] duration-300' disabled>Figma</p>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div >
    );
};

export default AboutMe;