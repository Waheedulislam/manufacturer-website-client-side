import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };
    const menuItems = <>
        <li><NavLink to='/home' className='rounded-lg m-2 '>Home</NavLink ></li>
        <li><NavLink to='/myProtoFolio' className='rounded-lg m-2 '>ProtoFolio</NavLink ></li>
        <li><NavLink to='/Blogs' className='rounded-lg m-2 '>Blogs</NavLink ></li>
        {
            user && <li><NavLink to='/dashBoard' className='rounded-lg m-2 '>DashBoard</NavLink ></li>
        }
        <li><NavLink to='/contact' className='rounded-lg m-2 '>Contact</NavLink ></li>

        <li>{user ? <button onClick={logout} className="rounded-lg m-2 text-white btn btn-primary">Sign Out</button> :
            <NavLink to='/login' className='rounded-lg m-2 btn btn-primary text-white' >Login</NavLink >
        }</li>


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
                    <a className="btn btn-ghost normal-case text-xl pl-8"> <Link to='/home'>Tools Way</Link></a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>

    );
};

export default Navbar;