import React from 'react';
import portfolioImg from '../../assets/images/portfolio.png';
import Slide from 'react-reveal/Slide';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Fade } from 'react-reveal';

const Banner = () => {
    const [text] = useTypewriter({
        words: ['Fazla Rabby.', 'a Full Stack Web Developer.', 'a MERN Developer.'],
        loop: 0
    })

    return (
        <div className='my-20 rounded'
        >
            <div className="card lg:card-side lg:p-7 pt-5">
                <Slide left><figure><img src={portfolioImg} alt="Album" className='w-3/5 rounded rounded-tl-[90px] rounded-br-[90px]' /></figure></Slide>
                <Fade top>
                    <div className="card-body lg:w-1/2">
                        <h2 className='card-title lg:text-6xl text-3xl text-white'>Hey,</h2>
                        <p className='mt-3 text-2xl text-white'>I am <span className='text-[#b6fbff] text-3xl font-semibold'>{text}<Cursor cursorColor='pink' /></span></p>

                        <p className='text-2xl text-white'>
                            Welcome to my portfolio. I am a full stack Web Developer. My passion is to build error free and user friendly websites.
                        </p>
                        <div className="card-actions justify-start">
                            <a href='https://drive.google.com/file/d/1cPmnkNYb82rdasLplOEHWF2Ob-vpiQRr/view?usp=share_link' className="btn btn-info text-white" rel="noreferrer" target="_blank">My Resume</a>
                        </div>
                    </div>
                </Fade>
            </div>
        </div >
    );
};

export default Banner;