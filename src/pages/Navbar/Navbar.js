import React from 'react';
import portfolioImg from '../../assets/images/portfolio.png'

const Navbar = () => {
    const navItems =
        <>
            <li><a href='https://drive.google.com/file/d/1cPmnkNYb82rdasLplOEHWF2Ob-vpiQRr/view?usp=share_link' className="btn" rel="noreferrer" target="_blank">Resume</a></li>
        </>
    return (
        <div className="navbar bg-indigo-600 text-white rounded-b px-7">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-indigo-600 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <div className="avatar">
                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={portfolioImg} alt=''/>
                    </div>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Fazla Rabby</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;