import React from 'react';
import { toast } from 'react-toastify';
import useItems from '../../hooks/useItems';

const ManagePerOrders = ({ item }) => {
    const { img, name, description, minimumOrder, availableQuantity, price } = item;

    const [items, setItems] = useItems();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to delete ?')
        if (proceed) {
            const url = `https://protected-gorge-88195.herokuapp.com/item/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // const uiDelete = items.filter(item => item._id !== id);
                    // setItems(uiDelete);
                    const uiDelete = items.filter(item => item._id !== id);
                    setItems(uiDelete)
                    toast('Success Fully Product Delete')
                })
        }
    }

    return (
        <div >
            <div className="card card-compacts bg-base-100 shadow-xl">
                <figure><img className='h-44' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl  font-bold">{name}</h2>
                    <p className='text-base'>{description.slice(0, 50) + '...'}</p>
                    <h5 className='text-lg'>Price: BDT <span className='text-sky-600'>{price}/pcs</span></h5>
                    <h5 className='text-xl'>Available Quantity: <span>{availableQuantity}</span></h5>
                    <h5 className='text-xl'>Minimum Quantity: <span>{minimumOrder}</span></h5>
                    <div className="card-actions justify-center">
                        <button className=" btn btn-error w-full" onClick={() => handleDelete(item._id)}>Delete </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagePerOrders;