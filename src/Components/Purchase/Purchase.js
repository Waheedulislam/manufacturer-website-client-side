import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { purchaseId } = useParams();
    const [items, setItems] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/itemPurchase/${purchaseId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [items])
    return (
        <div>
            <h1 className='text-4xl'>this is Purchase  page : {purchaseId}</h1>
            <h1>{items.name}</h1>
            <img src={items.img} alt="" />
        </div>
    );
};

export default Purchase;