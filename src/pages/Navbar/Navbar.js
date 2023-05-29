import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import portfolioImg from '../../assets/images/portfolio.png'

const Navbar = () => {
    const navItems =
        <>
            <li><NavLink className={({ isActive }) => isActive ? 'underline underline-offset-4 font-bold text-info' : ''} to='/'>Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'underline underline-offset-4 font-bold text-info' : ''} to='/aboutMe'>About Me</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'underline underline-offset-4 font-bold text-info' : ''} to='/projects'>Projects</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'underline underline-offset-4 font-bold text-info' : ''} to='/blogs'>Blogs</NavLink></li>
            <li><Link to='/sendMail' className="btn mt-3 lg:mt-0 lg:ml-3 lg:mr-6" rel="noreferrer" target="_blank">Send Query</Link></li>
            <li><a href='https://drive.google.com/file/d/1VZ7kStcnUBYvWV299HK0dKZ98I9mRvhq/view?usp=share_link' className="btn btn-info rounded-lg mt-3 lg:mt-0" rel="noreferrer" target="_blank">Resume</a></li>
        </>
    return (
        <div className="navbar bg-[#16162F] text-white rounded-b lg:px-11 py-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#2D2D41] rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <div className="avatar">
                    <div className="w-14 rounded-full ring ring-[#a2ab58] ring-offset-base-100 ring-offset-2">
                        <img src={portfolioImg} alt=''/>
                    </div>
                </div>
                <a href='/' className="btn btn-ghost normal-case text-xl">Fazla Rabby</a>
            </div>
            <div className="navbar-end w-full hidden lg:flex">
                <ul className="menu menu-horizontal">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;