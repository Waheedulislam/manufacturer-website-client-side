import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/itemOrder/${user?.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem(`accessToken`)}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                        navigate('/home')
                    }
                    return res.json()
                })
                .then(data => setOrders(data));
        }
    }, [user]);

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Quantity</th>
                        <th>Phon Number</th>
                        <th>Edits</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{order.userName}</td>
                            <td>{order.email}</td>
                            <td>{order.quantity}</td>
                            <td>{order.phon}</td>
                            <td>
                                <button className='btn btn-error'>Delete</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;