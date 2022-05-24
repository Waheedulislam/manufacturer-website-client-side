import React from 'react';
import Carousel from './Home/Carsoule/Carousel';
import Tools from './Home/Tools/Tools';

const Home = () => {
    return (
        <div >
            <Carousel></Carousel>
            <div className='mx-w-7xl mx-auto px-12'>
                <Tools></Tools>
            </div>
        </div>
    );
};

export default Home;