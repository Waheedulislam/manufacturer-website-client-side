import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const DashBoard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user);

    return (
        <div className="drawer drawer-mobile px-12">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <Outlet></Outlet>

            </div>
            <div className="drawer-side ">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80  text-base-content bg-base-100">

                    {
                        !admin &&
                        <>
                            < li className='py-2' > <Link to='/dashBoard'>My Orders</Link></li>
                            <li className='pb-2'><NavLink to='/dashBoard/review'>Add a Review</NavLink></li></>
                    }
                    <li className='pb-2'><NavLink to='/dashBoard/myProfile'>My Profile</NavLink></li>

                    {
                        admin &&
                        <><li className='pb-2'> <NavLink to='/dashBoard/manageAllOrder'>Manage All Orders</NavLink></li>
                            <li className='pb-2'><NavLink to='/dashBoard/addProduct'>Add a Product</NavLink></li>
                            <li className='pb-2'><NavLink to='/dashBoard/manageProduct'>Manage Products</NavLink></li>
                            <li className='pb-2'><NavLink to='/dashBoard/manageUsers'>Make Admin</NavLink></li>
                        </>
                    }
                </ul>

            </div>
        </div >
    );
};

export default DashBoard;