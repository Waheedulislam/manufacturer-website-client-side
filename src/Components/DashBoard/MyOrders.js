import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    console.log(orders);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://protected-gorge-88195.herokuapp.com/itemOrder/${user?.email}`, {
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

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to delete ?')
        if (proceed) {
            const url = `http://localhost:5000/itemOrder/${user.email}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const uiDelete = orders.filter(item => item.email !== user.email);
                    setOrders(uiDelete);
                    toast('Success Fully deleted product')
                })
        }
    }
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
                                <button className='btn btn-error' onClick={() => handleDelete(orders.email)}>Delete</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;