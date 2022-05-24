import React from 'react';

const PerTools = ({ item }) => {
    const { img, name, description, minimumOrder, availableQuantity, price } = item;
    return (
        <div className='text-center '>
            <div class="card card-compacts bg-base-100 shadow-xl">
                <figure><img className='h-44' src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="text-2xl text-center text-bold">{name}</h2>
                    <p>{description.slice(0, 90) + '...'}</p>
                    <h5 className='text-xl'>Price: $<span>{price}</span></h5>
                    <h5 className='text-xl'>Available Quantity: <span>{availableQuantity}</span></h5>
                    <h5 className='text-xl'>Minimum Quantity: <span>{minimumOrder}</span></h5>
                    <div class="card-actions justify-center">
                        <button class=" btn btn-primary w-80">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PerTools;