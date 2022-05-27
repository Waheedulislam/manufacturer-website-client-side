import React from 'react';

const PerReview = ({ review }) => {
    const { _id, name, description, rating } = review;
    return (
        <div >
            <div className="card card-compacts bg-base-100 shadow-xl text-center">
                <div class="avatar flex justify-center items-center pt-4">
                    <div class="w-20 rounded-full ring ring-primary ring-offset-base-100">
                        <img src="https://api.lorem.space/image/face?hash=3174" />
                    </div>
                </div>
                <div className="card-body h-48">
                    <div class="rating pt-0 flex justify-center items-center">
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400"></input>
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    </div>
                    <h2 className="text-xl  font-bold">{name}</h2>
                    <h5 className='text-xl'>Rating: <span>{rating}</span></h5>
                    <p className='text-base'>{description.slice(0, 80) + '...'}</p>

                </div>

            </div>
        </div>
    );
};

export default PerReview;