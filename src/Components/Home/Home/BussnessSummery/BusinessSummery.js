import React from 'react';
import bg from '../../../../img/bg.png'
import Business from './Business';

const BusinessSummery = () => {
    return (
        <div style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }}>
            <div className='pt-12'>
                <div className="text-4xl font-bold text-primary text-center">MILLIONS BUSINESS TRUST US</div>
                <h4 className='text-center text-xl pt-4 text-blue-900 '>TRY TO UNDERSTAND USERS EXPECTATION</h4>
            </div>

            <div className="shadow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-20">
                <div className='text-center'>
                    <div className="stat-figure text-primary">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-14 h-14 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>

                    </div>
                    <div className="stat-value">990+</div>
                    <div className="stat-desc font-bold text-primary text-xl pt-2">WE SERVED CUSTOMERS</div>
                </div>

                <div className='text-center'>
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-14 h-14 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div className="stat-value">120M+</div>
                    <div className="stat-desc font-bold text-primary text-xl pt-2">ANNUAL REVENUE</div>
                </div>

                <div className='text-center'>
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-14 h-14 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div className="stat-value">120+</div>
                    <div className="stat-desc font-bold text-primary text-xl pt-2">TOOLS (14%)</div>
                </div>
                <div className='text-center'>
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-14 h-14 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-value">33K+</div>
                    <div className="stat-desc text-xl pt-2 font-bold text-primary">REVIEWS</div>
                </div>
            </div>
            <Business></Business>
        </div>
    );
};

export default BusinessSummery;