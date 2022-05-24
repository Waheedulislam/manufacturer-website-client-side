import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ children }) => {
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

                <div className="w-full navbar bg-base-100 px-20">
                    <div className="flex-1 px-2 mx-2 text-2xl"><NavLink to='/' className='rounded-lg'>Tools</NavLink></div>
                    <div className="flex-none lg:hidden">
                        <label for="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>

                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal gap-x-2">
                            <li><NavLink to='/' className='rounded-lg'>Home</NavLink ></li>
                            <li><NavLink to='/about' className='rounded-lg '>About</NavLink ></li>
                            <li><NavLink to='/review' className='rounded-lg'>Review</NavLink ></li>
                            {/* <li><NavLink to='/contact' className='rounded-lg'>Contact</NavLink ></li> */}
                            <li><NavLink to='/login' className='rounded-lg' >Login</NavLink ></li>
                            <li className="dropdown dropdown-hover dropdown-end ">
                                <label tabindex="0" className="btn btn-primary btn-outline m-1 rounded-lg">Book Now</label>
                            </li>
                        </ul>
                    </div>
                </div>
                {children}
            </div>
            <div className="drawer-side">
                <label for="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                    <li><NavLink to='/' className='rounded-lg'>Home</NavLink ></li>
                    <li><NavLink to='/About' className='rounded-lg'>About</NavLink ></li>
                    <li><NavLink to='/review' className='rounded-lg'>Review</NavLink ></li>
                    {/* <li><NavLink to='/contact' className='rounded-lg'>Contact</NavLink ></li> */}
                    <li><NavLink to='/login' className='rounded-lg' >Login</NavLink ></li>
                    <li className="dropdown dropdown-hover dropdown-end ">
                        <label tabindex="0" className="btn btn-primary btn-outline m-1 rounded-lg">Book Now</label>
                    </li>
                </ul>

            </div>
        </div >
    );
};

export default Navbar;