import React from 'react';
import portfolioImg from '../../assets/images/portfolio.png';

const Banner = () => {
    return (
        <div className='mt-5 rounded'
        >
            <div className="card lg:card-side lg:p-7 pt-5">
                <figure><img src={portfolioImg} alt="Album" className='w-3/5 rounded' /></figure>
                <div className="card-body lg:w-1/2">
                    <h2 className='card-title lg:text-6xl text-3xl text-white'>Hey,</h2>
                    <p className='mt-3 text-2xl text-white'>Welcome to my portfolio.</p>
                    <p className='text-2xl text-white'>
                        I am Fazla Rabby a full stack Web Developer. My passion is to build error free and user friendly websites.
                    </p>
                    <div className="card-actions justify-start">
                        <a href='https://drive.google.com/file/d/1cPmnkNYb82rdasLplOEHWF2Ob-vpiQRr/view?usp=share_link' className="btn btn-primary" rel="noreferrer" target="_blank">My Resume</a>
                </div>
            </div>
        </div>
        </div >
    );
};

export default Banner;