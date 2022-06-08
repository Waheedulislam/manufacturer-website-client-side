import React from 'react';
import AboutUs from '../LoginRegister/AboutUs';
import Review from '../Review/Review';
import ExtraSection from './ExtraSection/ExtraSection';
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
            <div className='mx-w-7xl mx-auto px-12'>
                <AboutUs></AboutUs>
            </div >
            <BusinessSummery></BusinessSummery>
            <div className='mx-w-7xl mx-auto px-12'>
                <ExtraSection></ExtraSection>
                <Review></Review>

            </div>
        </div>
    );
};

export default Home;