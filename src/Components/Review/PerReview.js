import React from 'react';

const PerReview = ({ review }) => {
    const { _id, name, description, rating } = review;
    return (
        <div >
            <div className="card card-compacts bg-base-100 shadow-xl">
                {/* <figure><img className='h-44' src={img} alt="Shoes" /></figure> */}
                <div className="card-body h-48">
                    <h2 className="text-2xl  font-bold">{name}</h2>
                    <p className='text-base'>{description.slice(0, 90) + '...'}</p>
                    <h5 className='text-xl'>Rating: <span>{rating}</span></h5>
                </div>
            </div>
        </div>
    );
};

export default PerReview;