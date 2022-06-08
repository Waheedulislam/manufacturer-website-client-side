import React from 'react';

const Business = () => {
    return (
        <div>
            <div className='flex justify-center pt-20' >
                <div className="card bg-base-100 shadow-2xl">
                    <div className="card-body ">
                        <div className='flex '>
                            <div>
                                <div className="text-2xl font-bold text-primary ">Have any question about us or get a <br />
                                    products request</div>
                                <h5 className='text-xl pt-2'>Don't hesitate to contact us</h5>
                            </div>
                            <div className='justify-center items-center pt-4 pl-20'>
                                <button className='btn btn-primary '>Request For Quote</button>
                                <button className='btn btn-success mt-4 ml-4'>Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Business;