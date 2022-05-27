import React, { useEffect, useState } from 'react';
import PerReview from './PerReview';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/review`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <div className='my-12 '>
            <h1 className='text-center text-4xl font-bold text-primary'>Reviews: {reviews.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 pt-8 lg:grid-cols-3 gap-5 '>
                {
                    reviews.map(review => <PerReview
                        key={review._id}
                        review={review}
                    ></PerReview>)
                }
            </div>
        </div>
    );
};

export default Review;