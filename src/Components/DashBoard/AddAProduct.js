import React from 'react';
import { toast } from 'react-toastify';

const AddAProduct = () => {

    const handleAddProduct = event => {
        event.preventDefault();
        const product = {
            productName: event.target.productName.value,
            price: event.target.price.value,
            availableQuantity: event.target.availableQuantity.value,
            minimumOrder: event.target.minimumOrder.value,
            description: event.target.description.value,
            img: event.target.img.value,
        }
        const url = `https://protected-gorge-88195.herokuapp.com/item`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('Successful Item added')
                event.target.reset();
            })
        console.log(product);
    }

    return (
        <div>
            <div class="card lg:w-6/12 lg:mx-60 bg-base-100 shadow-xl mt-5">

                <div class="card-body text-center">
                    <h1 className='text-3xl pb-3 text-primary font-bold text-center'>Add Products</h1>
                    <form onSubmit={handleAddProduct} className='lg:ml-16 '>
                        <div className="form-control w-full max-w-xs pb-3">
                            <input
                                type="text"
                                name='productName'
                                placeholder="Product Name"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        {/* price  */}
                        <div className="form-control w-full max-w-xs pb-3">
                            <input type="number" name='price' placeholder="price" className="input input-bordered w-full max-w-md " />
                        </div>
                        {/* Available Quantity  */}
                        <div className="form-control w-full max-w-xs pb-3">
                            <input type="number" name='availableQuantity' placeholder="Available Quantity" className="input input-bordered w-full max-w-md " />
                        </div>
                        {/* Minimum Quantity */}
                        <div className="form-control w-full max-w-xs pb-3">
                            <input type="number" name='minimumOrder' placeholder="Minimum Order " className="input input-bordered w-full max-w-md " />
                        </div>

                        {/* description  */}
                        <div className="form-control pb-3  text-center w-full max-w-xs">
                            <textarea type="text" autoComplete='off' name='description' required
                                placeholder="description" className="input input-bordered w-full max-w-xs" />
                        </div>
                        {/* img  */}
                        <div className="form-control pb-3 text-center w-full max-w-xs">
                            <input type="text"
                                required
                                autoComplete='off'
                                placeholder='Photo URL'
                                name='img'
                                className="input input-bordered w-full max-w-xs" />
                        </div>
                        <input className='btn btn-primary mr-14 text-white w-full max-w-xs' type="submit" value='update' />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddAProduct;