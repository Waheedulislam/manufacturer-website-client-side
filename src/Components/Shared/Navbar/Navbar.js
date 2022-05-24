import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <>
        <li><NavLink to='/' className='rounded-lg  '>Home</NavLink ></li>
        <li><NavLink to='/about' className='rounded-lg '>About</NavLink ></li>
        <li><NavLink to='/review' className='rounded-lg '>Review</NavLink ></li>
        <li><NavLink to='/contact' className='rounded-lg'>Contact</NavLink ></li>
        <li><NavLink to='/login' className='rounded-lg ' >Login</NavLink ></li>
        <li className="dropdown dropdown-hover dropdown-end ">
            <label tabindex="0" className="btn btn-primary btn-outline m-1 rounded-lg">Book Now</label>
        </li>
        {
            // user && <li><Link to='/dashboard'>DashBoard</Link></li>
        }
        {/* <li>{user ? <button onClick={logout} className="btn btn-ghost">Sign Out</button> : <Link to='/login'>Login</Link>}</li> */}
    </>
    return (
        <div>
            <div className="navbar bg-base-100 px-14">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div >
                    <a className="btn btn-ghost normal-case text-xl pl-8"> <Link to='/home'>Doctors Portal</Link></a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Navbar;