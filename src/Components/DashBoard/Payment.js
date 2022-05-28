import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/itemOrder/${id}`

    const { data } = useQuery(['itemOrder', id], () => fetch(url,).then(res => res.json()))
    return (
        <div>
            <h1>Payment: {id}</h1>
        </div>
    );
};

export default Payment;