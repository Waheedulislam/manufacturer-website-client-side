import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Purchase = () => {
    const { purchaseId } = useParams();
    const [items, setItems] = useState({});

    const [user] = useAuthState(auth);

    // load oneItem
    useEffect(() => {
        const url = `http://localhost:5000/itemPurchase/${purchaseId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [items])


    // submit 
    const handleNewItem = event => {
        event.preventDefault();
        const addOrder = {
            email: user.email,
            userName: user.displayName,
            quantity: event.target.quantity.value,
            address: event.target.address.value,
            phon: event.target.phon.value,
        }
        console.log(addOrder);

        if ((event.target.quantity.value) < (items.minimumOrder)) {
            alert('The order quantity can not be Minimum than the available quantity.')
        }
        else if ((event.target.quantity.value) > (items.availableQuantity)) {
            // post
            alert('The order quantity can not be higher than the available quantity.')
        }
        else {
            const url = `http://localhost:5000/itemOrder`
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(addOrder)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    alert('Successful Item added')
                    event.target.reset();
                })
        }
        console.log(addOrder);
    }

    return (
        <div>
            <div class="hero min-h-screen  bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">

                    <div className='px-16'>
                        <div class="card w-full   bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h3 className='text-4xl font-bold text-primary py-4 text-center '>Product Information</h3>
                                <h2 className="text-xl pb-2 font-bold">Name: <small className='text-primary'>{items.name}</small></h2>
                                <p className='text-base'>{items.description}</p>
                                <h5 className='text-lg'>Price: BDT <span className='text-sky-600'>{items.price}/pcs</span></h5>
                                <h5 className='text-xl'>Available Quantity: <span>{items.availableQuantity}</span></h5>
                                <h5 className='text-xl'>Minimum Quantity: <span>{items.minimumOrder}</span></h5>
                            </div>
                        </div>
                        <div class="card w-full mt-12 bg-base-100 shadow-xl ">
                            <div class="card-body ">
                                <h2 class="text-2xl font-bold pb-2 text-center text-primary">Order Confirm</h2>
                                <div className='lg:pl-14'>

                                    {/* from */}
                                    <form onSubmit={handleNewItem}>

                                        {/* quantity */}
                                        <div className='pl-20'>
                                            <div class="form-control w-full max-w-xs">

                                                <label class="label">
                                                    <span class="label-text font-bold pl-10 text-primary">Quantity</span>
                                                </label>

                                                <input
                                                    required
                                                    type="number"
                                                    name='quantity'
                                                    placeholder="Quantity"
                                                    class="mb-3 input input-bordered w-36  max-w-xs"
                                                />

                                            </div>

                                        </div>
                                        {/* name  */}
                                        <div class="form-control pb-3 text-center w-full max-w-xs">
                                            <input type="text" name='name' placeholder="Name" readOnly value={user.displayName} class="input input-bordered w-full max-w-md " />
                                        </div>
                                        {/* email */}
                                        <div class="form-control pb-3 text-center w-full max-w-xs">
                                            <input type="email" value={user.email} readOnly name='email' placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
                                        </div>
                                        {/* address  */}
                                        <div class="form-control pb-3 text-center w-full max-w-xs">
                                            <input type="text" autoComplete='off' name='address' required placeholder="Address" class="input input-bordered w-full max-w-xs" />
                                        </div>
                                        {/* phone  */}
                                        <div class="form-control pb-3 text-center w-full max-w-xs">
                                            <input type="text" required autoComplete='off' name='phon' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                                        </div>

                                        <input type="submit" class="sm:w-56 ml-8 w-8/12 text-center btn btn-primary" value="Submit Information" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <img className='w-6/12 ' src={items.img} />
                </div>
            </div>
        </div>
    );
};

export default Purchase;