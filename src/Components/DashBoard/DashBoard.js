import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className="drawer drawer-mobile px-12">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h2 className='text-3xl font-bold text-purple-500'>Welcome to Your DashBoard</h2>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashBoard'>My Orders</Link></li>
                    <li><Link to='/dashBoard/review'>Add a Review</Link></li>
                    <li><Link to='/dashBoard/myProfile'>My Profile</Link></li>
                    <li><Link to='/dashBoard/manageUsers'>Manage Users</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;