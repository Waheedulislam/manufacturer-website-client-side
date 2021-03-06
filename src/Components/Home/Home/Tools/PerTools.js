import React from 'react';
import { useNavigate } from 'react-router-dom';

const PerTools = ({ item }) => {
    const { _id, img, name, description, minimumOrder, availableQuantity, price } = item;
    const navigate = useNavigate();

    const navigateToPurchase = (id) => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div >
            <div className="card card-compacts bg-base-100 shadow-xl">
                <figure><img className='h-44' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl  font-bold">{name}</h2>
                    <p className='text-base'>{description.slice(0, 90) + '...'}</p>
                    <h5 className='text-lg'>Price: BDT <span className='text-sky-600'>{price}/pcs</span></h5>
                    <h5 className='text-xl'>Available Quantity: <span>{availableQuantity}</span></h5>
                    <h5 className='text-xl'>Minimum Quantity: <span>{minimumOrder}</span></h5>
                    <div className="card-actions justify-center" onClick={() => navigateToPurchase(_id)}>
                        <button className=" btn btn-primary w-full">Buy Now</button>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default PerTools;