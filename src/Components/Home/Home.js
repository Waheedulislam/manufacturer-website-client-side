import React from 'react';
import Review from '../Review/Review';
import BusinessSummery from './Home/BussnessSummery/BusinessSummery';
import Carousel from './Home/Carsoule/Carousel';
import Tools from './Home/Tools/Tools';

const Home = () => {
    return (
        <div >
            <Carousel></Carousel>
            <div className='mx-w-7xl mx-auto px-12'>
                <Tools></Tools>
            </div>
            <BusinessSummery></BusinessSummery>
            <div className='mx-w-7xl mx-auto px-12'>
                <Review></Review>
            </div>
        </div>
    );
};

export default Home;