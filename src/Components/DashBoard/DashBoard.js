import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div class="drawer drawer-mobile px-12">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h2 className='text-3xl font-bold text-purple-500'>Welcome to Your DashBoard</h2>
                <Outlet></Outlet>

            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashBoard'>My Orders</Link></li>
                    <li><Link to='/dashBoard/review'>Add a Review</Link></li>
                    <li><Link to='/dashBoard/myProfile'>My Profile</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;