import React from 'react';

const AddAProduct = () => {
    return (
        <div>
            <div class="card lg:w-6/12 lg:mx-60 bg-base-100 shadow-xl mt-5">

                <div class="card-body text-center">
                    <h1 className='text-3xl pb-3 text-primary font-bold text-center'>Add Products</h1>
                    <form className='lg:ml-16 '>
                        <div className="form-control w-full max-w-xs pb-3">
                            <input
                                type="text"
                                placeholder="Product Name"
                                readOnly
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
                            <input type="number" name='minimum Quantity' placeholder="Minimum Quantity " className="input input-bordered w-full max-w-md " />
                        </div>

                        {/* description  */}
                        <div className="form-control pb-3  text-center w-full max-w-xs">
                            <input type="text" autoComplete='off' name='Short Description' required placeholder="description" className="input input-bordered w-full max-w-xs" />
                        </div>
                        {/* phone  */}
                        <div className="form-control pb-3 text-center w-full max-w-xs">
                            <input type="text" required autoComplete='off' name='phon' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <input className='btn btn-primary mr-14 text-white w-full max-w-xs' type="submit" value='update' />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddAProduct;