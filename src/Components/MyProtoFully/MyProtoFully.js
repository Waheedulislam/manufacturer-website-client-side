import React from 'react';
import img from '../../../src/img/my.jpg'
const MyProtoFully = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={img} class="max-w-lg rounded-lg shadow-2xl" />
                    <div className='mx-12'>
                        <h1 class="text-5xl font-bold">Waheedul Islam</h1>
                        <h1 class="text-2xl font-bold py-2">Email:
                            <span className='text-primary'>baoppyhossen1234@gmaill.com.</span></h1>
                        <h1 class="text-2xl font-bold">Education: <span className='text-primary'>HSC 1st Year.</span></h1>
                        <br />
                        <h3 className='text-2xl font-bold '>
                            My web developer Skills.
                            <p className='text-xl font-bold text-primary'>

                                HTML/CSS skills,
                                Bootstrap 5 & React Bootstrap,
                                Tailwind & Daisy UI,
                                Responsive design skills,
                                JavaScript skills,
                                React Router,
                                Testing and debugging skills,
                                Back-end basics,
                                Mongodb etc
                            </p>

                        </h3>
                        <p class="py-6 font-bold text-3xl">My Portfolio Website.</p>
                        <ul>
                            <li>1st: https://inventory-house-a0164.web.app/</li>
                            <li>2nd: https://gym-trainer-services.web.app</li>
                            <li>3rd: https://melodic-kataifi-27b80e.netlify.app/</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProtoFully;