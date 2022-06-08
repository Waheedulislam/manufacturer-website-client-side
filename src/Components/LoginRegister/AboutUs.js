import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div className='py-12'>
                <div class="hero sm-h-screen">
                    <div class="hero-content  flex-col lg:flex-row">

                        <div className='lg:px-12'>
                            <h1 class="text-5xl font-bold text-primary">Electric Tools Detail!</h1>
                            <p class="py-6 ">
                                Electrical tools are tools used to work on an electrical system. These can include a wide range of tools such as wire and cable cutters, wire strippers, coaxial compression tools, telephony tools, wire cutter/strippers, cable tie tools, accessories, and even more.</p>
                            <button class="btn btn-primary">See More Details</button>
                        </div>
                        <img src="https://media.istockphoto.com/photos/mechanic-work-tools-for-home-renovation-on-grey-metallic-background-picture-id1306946619?k=20&m=1306946619&s=612x612&w=0&h=drySVuvx9odGIFbQLkCuswj54k2OOexkbCGTnDtKqC0=" class="lg:max-w-lg rounded-lg shadow-2xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;