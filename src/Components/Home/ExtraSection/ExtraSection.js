import React from 'react';

const ExtraSection = () => {
    return (
        <div className='py-20'>
            <div class="hero sm-h-screen">
                <div class="hero-content  flex-col lg:flex-row">
                    <img src="https://media.istockphoto.com/photos/electric-drill-with-drill-bits-screws-on-dark-background-picture-id165886428?b=1&k=20&m=165886428&s=170667a&w=0&h=5JmNlxzf6FZZJ4ZinZMz-AKqSQ1iCVTn9xnH4UTFlRg=" className='rounded-lg lg:max-w-lg' />
                    <div className='lg:px-12'>
                        <h1 class="text-5xl font-bold text-primary">Drilling Machine Detail!</h1>
                        <p class="py-6">
                            A drilling machine is one of the most powerful tools in the drills category. The equipment is mainly designed to make holes into different surfaces such as metal, wood, concrete walls, or any other hard surface. Having a drilling machine at your home makes drilling tasks and other related operations like driving fasteners easier.</p>
                        <button class="btn btn-primary">See More Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;